name = 'Bob'
save_name = name
name.upcase!
puts name, save_name

# This prints out:
# BOB
# BOB
# This is because save_name points to the same object as name and we have used the
# destructive method upcase! on name which alters othe bject that save_name is pointing at.