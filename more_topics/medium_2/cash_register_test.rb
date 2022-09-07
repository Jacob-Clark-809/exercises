require 'minitest/autorun'
require 'minitest/reporters'
MiniTest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < MiniTest::Test
  def setup
    @register = CashRegister.new(100)
    @transaction = Transaction.new(50)
  end

  def test_accept_money
    @transaction.amount_paid = 50
    previous_amount = @register.total_money
    @register.accept_money(@transaction)
    current_amount = @register.total_money

    assert_equal(previous_amount + 50, current_amount)
  end

  def test_change
    @transaction.amount_paid = 100

    assert_equal(50, @register.change(@transaction))
  end

  def test_give_receipt
    assert_output("You've paid $50.\n") { @register.give_receipt(@transaction) }
  end
end