class TextAnalyzer
  def process
    file = File.open('ex2.txt')
    file_data = file.read
    yield(file_data)
    file.close
  end
end

analyzer = TextAnalyzer.new
analyzer.process { |data| puts "#{data.split("\n\n").count} paragraphs" }
analyzer.process { |data| puts "#{data.split("\n").count} lines" }
analyzer.process { |data| puts "#{data.split(' ').count} words" }