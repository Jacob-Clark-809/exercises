ADJECTIVES = %w(quick lazy sleepy ugly)
NOUNS = %w(fox dog head leg)
VERBS = %w(jumps lifts bites licks)
ADVERBS = %w(easily lazily noisily excitedly)

file_data = File.read('ex1.txt').split

madlib_arr = file_data.each do |word|
  word.gsub!('%{adjective}', ADJECTIVES.sample)
  word.gsub!('%{noun}', NOUNS.sample)
  word.gsub!('%{verb}', VERBS.sample)
  word.gsub!('%{adverb}', ADVERBS.sample)
end

puts madlib_arr.join(' ')
