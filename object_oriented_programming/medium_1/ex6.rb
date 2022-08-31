class GuessingGame
  def play
    @to_guess = (1..100).to_a.sample
    @attempts = 7
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
    puts "Enter a number between 1 and 100:"
    guess = nil
    loop do
      guess = gets.chomp.to_i
      break if (1..100).include?(guess)
      puts "Invalid guess."
    end
    guess
  end

  def display_guesses
    puts "You have #{@attempts} guesses remaining."
  end
end

game = GuessingGame.new

game.play

game.play