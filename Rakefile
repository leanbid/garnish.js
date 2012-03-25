
require 'uglifier'

CURRENT_DIR =  File.expand_path(__FILE__ + "/../") + "/"

task :build do

  buf = []
  buf.push File.new(CURRENT_DIR + "src/license.txt", "r").collect {|line| line}.join
  buf.push "\nvar garnish = {};\n"
  buf.push "\n(function(){\n"
  buf.push File.new(CURRENT_DIR + "src/constants.js", "r").collect {|line| line}.join
  Dir::open(CURRENT_DIR + "src/functions/").each do |name|
    if name.match /\.js$/
      buf.push File.new(CURRENT_DIR + "src/functions/#{name}", "r").collect {|line| line}.join
    end
  end
  buf.push File.new(CURRENT_DIR + "src/core.js", "r").collect {|line| line}.join
  Dir::open(CURRENT_DIR + "src/methods/").each do |name|
    if name.match(/\.js\Z/)
     buf.push File.new(CURRENT_DIR + "src/methods/#{name}", "r").collect {|line| line}.join
    end
  end
  Dir::open(CURRENT_DIR + "src/initializers/").each do |name|
    if name.match /\.js$/
      buf.push File.new(CURRENT_DIR + "src/initializers/#{name}", "r").collect {|line| line}.join
    end
  end
  buf.push File.new(CURRENT_DIR + "src/bootstrap.js", "r").collect {|line| line}.join
  buf.push "\n})()\n"
  
  f = File.new(CURRENT_DIR + "garnish.js", "w")
  f.write buf.join("\n")
  f.close
  
  f = File.new(CURRENT_DIR + "garnish.min.js", "w")
  f.write Uglifier.new.compile(buf.join("\n"))
  f.close
  
end

task :clean do
  File::delete(CURRENT_DIR + "garnish.js")
  File::delete(CURRENT_DIR + "garnish.min.js")
end
