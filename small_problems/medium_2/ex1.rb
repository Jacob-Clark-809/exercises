def longest_sentence(file)
  file_data = File.read(file).split(/\.|\?|!/)
  ordered = file_data.sort_by { |sentence| sentence.split.length }
  length = ordered[-1].split.length
  longest = ordered[-1].chomp
  puts "The longest sentence is: '#{longest}.'"
  puts "It is #{length} words long."
end

longest_sentence("ex1.txt")
longest_sentence("frankenstein.txt")