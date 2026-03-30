-- comment

--[[
multicomment
--]]

local var = 5
local string = "asd"
local string2 = '1asd'
local multiline = [[
    asd
    asd
]]
local truth, lies = true, false
local nil_var = nil


local function myfunc(world)
    print("hello", world)
end

local great = function(world)
    print("hello", world)
end

local higher_order = function(value1)
    return function(value2)
        print(value1, value2)
    end
end

local list = {1, 2, 3, 4, 5, "false"}
print(list[1])
local var = {
    key = "value",
    ["key"] = "also workd"
}
print(var)
higher_order(2)(3)

local my_var = {"a", "b", "c", "d"}

for i = 1, #my_var do
    print(my_var[i])
end

for k,v in pairs(my_var) do
    print(k, v)
end

local function check_boolean(value)
    if value then
        print(value, "true")
    elseif value == nil then
        print(value, "nil")
    else
        print(value, "false")
    end
end
local truth = require('b')
check_boolean(0)
check_boolean("")
check_boolean(false)
check_boolean(nil)
check_boolean({ })
check_boolean()


local function with_spread(...)
    local my_table = { ...}
    for k,v in pairs(my_table) do
        print(k,v)
    end
    return table.unpack(my_table)
end

print("1:", with_spread("a", "b", "c"))
print("1:", with_spread("a", "b", "c"), "lost")