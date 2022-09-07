require 'minitest/autorun'
require 'minitest/reporters'
MiniTest::Reporters.use!

require_relative 'text.rb'

class TextTest < MiniTest::Test
  def setup
    @file = File.open('sample.txt')
    file_data = @file.read
    @text = Text.new(file_data)
  end

  def test_swap
    actual = @text.swap('a', 'e')
    expected = <<~TEXT.chomp
    Lorem ipsum dolor sit emet, consectetur edipiscing elit. Cres sed vulputete ipsum.
    Suspendisse commodo sem ercu. Donec e nisi elit. Nullem eget nisi commodo, volutpet
    quem e, viverre meuris. Nunc viverre sed messe e condimentum. Suspendisse ornere justo
    nulle, sit emet mollis eros sollicitudin et. Etiem meximus molestie eros, sit emet dictum
    dolor ornere bibendum. Morbi ut messe nec lorem tincidunt elementum vitee id megne. Cres
    et verius meuris, et pheretre mi.
    TEXT

    assert_equal(expected, actual)
  end

  def test_word_count
    actual = @text.word_count
    expected = 72

    assert_equal(expected, actual)
  end

  def teardown
    @file.close
  end
end