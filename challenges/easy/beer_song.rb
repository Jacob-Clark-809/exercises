class BeerSong
  def self.verse(line)
    if line != 1 && line != 0 && line != 2
      "#{line} bottles of beer on the wall, #{line} bottles of beer.\n" +
      "Take one down and pass it around, #{line - 1} bottles of beer on the wall.\n"
    elsif line == 2
      "#{line} bottles of beer on the wall, #{line} bottles of beer.\n" +
      "Take one down and pass it around, #{line - 1} bottle of beer on the wall.\n"
    elsif line == 1
      "#{line} bottle of beer on the wall, #{line} bottle of beer.\n" +
      "Take it down and pass it around, no more bottles of beer on the wall.\n"
    else
      "No more bottles of beer on the wall, no more bottles of beer.\n" +
      "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    end
  end

  def self.verses(start, finish)
    result = ''
    current_line = start
    until current_line < finish
      result << BeerSong.verse(current_line)
      result << "\n"
      current_line -= 1
    end
    result.chop
  end

  def self.lyrics
    BeerSong.verses(99, 0)
  end
end