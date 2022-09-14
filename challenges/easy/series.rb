class Series
  def initialize(series)
    @series = series
  end

  def slices(slice_length)
    raise(ArgumentError) if slice_length > @series.length
    result = []
    count = 0
    until count + slice_length > @series.length
      current_slice = []
      slice_length.times { |ind| current_slice << @series[count + ind].to_i }
      result << current_slice
      count += 1
    end
    result
  end
end