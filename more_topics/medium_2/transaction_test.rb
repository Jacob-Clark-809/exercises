require 'minitest/autorun'
require 'minitest/reporters'
MiniTest::Reporters.use!

require_relative 'transaction'

class TransactionTest < MiniTest::Test
  def test_prompt_for_payment
    input = StringIO.new("80\n")
    output = StringIO.new
    trans = Transaction.new(50)
    trans.prompt_for_payment(input: input, output: output)

    assert_equal(80, trans.amount_paid)
  end
end