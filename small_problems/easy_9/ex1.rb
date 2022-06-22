def greetings(name, details)
  "Hello #{name.join(" ")}! Nice to have a #{details[:title]} #{details[:occupation]} around."
end

p greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })

