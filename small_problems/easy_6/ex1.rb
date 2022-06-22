def dms(angle)
  degrees, remainder = angle.divmod(1)
  minutes, remainder = (remainder * 60).divmod(1)
  seconds = (remainder * 60) / 1
  "#{degrees}°#{format('%02d', minutes)}'#{format('%02d', seconds)}\""
end

puts dms(30)
puts dms(76.73)
puts dms(254.6)
puts dms(93.034773)
puts dms(0)
puts dms(360)

