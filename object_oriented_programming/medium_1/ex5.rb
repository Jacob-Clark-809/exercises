class Minilang
  VALID_TOKENS = ['PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP', 'PRINT']

  def initialize(instruction)
    @instructions = instruction.split
    @register = 0
    @stack = []
  end

  def eval
    until @instructions.empty?
      current = @instructions.shift
      verify_token(current)
      perform_token(current)
    end
    puts ""
  end

  def perform_token(token)
    case token
    when 'PUSH' then @stack.push(@register)
    when 'ADD' then @register += @stack.pop
    when 'SUB' then  @register -= @stack.pop
    when 'MULT' then @register *= @stack.pop
    when 'DIV' then @register /= @stack.pop
    when 'MOD' then @register %= @stack.pop
    when 'POP' then @register = @stack.pop
    when 'PRINT' then puts @register
    else @register = token.to_i
    end
  end

  def update_register(int)
    @register = int
  end

  def verify_token(token)
    if !VALID_TOKENS.include?(token) && !integer?(token)
      raise InvalidToken.new("Invalid Token: #{token}")
    elsif ['ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP'].include?(token) && @stack.empty?
      raise EmptyStack.new("Empty stack!")
    end
  end

  def integer?(str)
    str.to_i.to_s == str
  end
end

class InvalidToken < StandardError; end

class EmptyStack < StandardError; end

Minilang.new('PRINT').eval
# 0

Minilang.new('5 PUSH 3 MULT PRINT').eval
# 15

Minilang.new('5 PRINT PUSH 3 PRINT ADD PRINT').eval
# 5
# 3
# 8

Minilang.new('5 PUSH 10 PRINT POP PRINT').eval
# 10
# 5

# Minilang.new('5 PUSH POP POP PRINT').eval
# Empty stack!

Minilang.new('3 PUSH PUSH 7 DIV MULT PRINT ').eval
# 6

Minilang.new('4 PUSH PUSH 7 MOD MULT PRINT ').eval
# 12

# Minilang.new('-3 PUSH 5 XSUB PRINT').eval
# Invalid token: XSUB

Minilang.new('-3 PUSH 5 SUB PRINT').eval
# 8

Minilang.new('6 PUSH').eval
# (nothing printed; no PRINT commands)
