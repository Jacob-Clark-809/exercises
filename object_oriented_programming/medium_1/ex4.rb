require 'pry'

class CircularQueue
  def initialize(size)
    @size = size
    @array = Array.new(size)
    @oldest = 0
    @newest = -1
  end

  def enqueue(val)
    @newest += 1
    fix_pointers
    @oldest += 1 unless @array[@newest] == nil
    fix_pointers
    @array[@newest] = val
    # binding.pry
  end

  def dequeue
    unless @array[@oldest] == nil
      to_return = @array[@oldest]
      @array[@oldest] = nil
      @oldest += 1
    end
    fix_pointers
    # binding.pry
    to_return
  end

  def fix_pointers
    if @newest >= @size
      @newest = 0
    end
    if @oldest >= @size
      @oldest = 0
    end
  end
end

queue = CircularQueue.new(3)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil

queue = CircularQueue.new(4)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 4
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil