def bubble_sort!(arr)
  sorted = false
  until sorted
    count = 0
    swaps = 0
    while count < arr.length - 1
      if arr[count] > arr[count + 1]
        arr[count], arr[count + 1] = arr[count + 1], arr[count]
        swaps += 1
      end
      count += 1
    end
    sorted = true if swaps == 0
  end
end

array = [5, 3]
bubble_sort!(array)
p array == [3, 5]

array = [6, 2, 7, 1, 4]
bubble_sort!(array)
p array == [1, 2, 4, 6, 7]

array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
bubble_sort!(array)
p array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)