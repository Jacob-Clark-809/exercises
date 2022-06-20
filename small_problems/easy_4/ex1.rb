def short_long_short(one, two)
  if one.length < two.length
    short  = one
    long = two
  else
    short = two
    long = one
  end
  short + long + short
end

p short_long_short('abc', 'defgh') == "abcdefghabc"
p short_long_short('abcde', 'fgh') == "fghabcdefgh"
p short_long_short('', 'xyz') == "xyz"
