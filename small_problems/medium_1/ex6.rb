def minilang(commands)
  register = 0
  stack = []
  commands = commands.split
  commands.each do |command|
    case command
    when 'PUSH'
      stack << register
    when 'ADD'
      register += stack.pop
    when 'SUB'
      register -= stack.pop
    when 'MULT'
      register *= stack.pop
    when 'DIV'
      register = register / stack.pop
    when 'MOD'
      register = register % stack.pop
    when 'POP'
      register = stack.pop
    when 'PRINT'
      puts register
    else
      register = command.to_i
    end
  end
end

minilang('3 PUSH 5 MOD PUSH 7 PUSH 5 PUSH 4 MULT PUSH 3 ADD SUB DIV PRINT')

minilang('PRINT')
# 0

minilang('5 PUSH 3 MULT PRINT')
# 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
# 5
# 3
# 8

minilang('5 PUSH POP PRINT')
# 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
# 5
# 10
# 4
# 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT ')
# 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT ')
# 12

minilang('-3 PUSH 5 SUB PRINT')
# 8

minilang('6 PUSH')
# (nothing printed; no PRINT commands)