class GuessingGame
  def initialize(lower, higher)
    @range = (lower..higher)
  end

  def play
    @to_guess = rand(@range)
    @attempts = Math.log2(@range.size).to_i + 1
    until @player_guess == @to_guess || @attempts == 0
      display_guesses
      @player_guess = guess
      display_result
      @attempts -= 1
    end

    puts "You have no more guesses. You lost!" unless @player_guess == @to_guess
  end

  def display_result
    if @player_guess > @to_guess
      puts "Your guess is too high."
    elsif @player_guess < @to_guess
      puts "Your guess is too low."
    else
      puts "That's the number! You win!"
    end
  end

  def guess
    puts "Enter a number between #{@range.first} and #{@range.last}:"
    guess = nil
    loop do
      guess = gets.chomp.to_i
      break if @range.cover?(guess)
      puts "Invalid guess."
    end
    guess
  end

  def display_guesses
    puts "You have #{@attempts} guesses remaining."
  end
end

game = GuessingGame.new(501, 1500)

game.play