def time_of_day(total_mins)
  total_mins = total_mins % (60*24)
  hours = total_mins / 60
  mins = total_mins % 60
  "#{hours / 10}#{hours % 10}:#{mins / 10}#{mins % 10}"
end

p time_of_day(0) == "00:00"
p time_of_day(-3) == "23:57"
p time_of_day(35) == "00:35"
p time_of_day(-1437) == "00:03"
p time_of_day(3000) == "02:00"
p time_of_day(800) == "13:20"
p time_of_day(-4231) == "01:29"