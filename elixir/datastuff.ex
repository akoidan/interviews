defmodule N do
  def main do
    data_stuff()
  end

  def data_stuff do
    my_float = 3.14
    # is_integer
    IO.puts "is Float #{is_float(my_float)}"
    IO.puts "Atom 1 #{is_atom(:Ukraine)}"
    IO.puts "Atom 2 #{is_atom(:"New York")}"
  end

  def data_string do
    my_str = "String example"
    IO.puts "Length #{String.length(my_str)}"
    if a > 3 do
      "asd" |> IO.puts
    end

    map_sample = %{"Alabama" => "Montgomery"}
    list_sample = [1,2,3]
    tuple_sample = {1,2,3}
    Dict.put_new map_sample, "Ukraine", "Kiev"

    [length, width] = [20, 30]
    [_, [a,b]] = [1,[2,3]]

    # fn less(a,b) -> return a -b
    get_less = &(&1 - &2)

    get_sum = fn(x,y) -> x+y end


    add_sum = fn
      {x,y} -> x+y
      {x,y,z} -> x+y+z
    end

    # multiple arguments length
    add_sum.({1,2})
    add_sum.({1,2,3})


    def empty_fn(), do: 0



    # err
    err = try do
      5 / 0

      rescue
        ArithmeticError -> "Can't divide by zero"
    end

    IO.puts err

    #default argument

    def default_argument(x \\ 1, y \\ 2) do
      x + y
    end
    IO.puts "5 +5 = #{get_sum 5 5}"

    # spawns a new process
    spawn(fn() -> IO.puts "Hello" end)

    # sending message to thread
    send(self(), {:french, "Bob"}) # self is current thread

    receive do
      {:french, name} -> Io.puts "Bonjour #{name}"
      {:english, name} -> Io.puts "Hello #{name}"
    end


    # wait 500ms
    after
      500 -> IO.puts "Time up"
    end
    ###

    cond do
      age >= 14 -> IO.puts "WTF"
      age >= 14 -> IO.puts "WTF"
      age >= 16 -> IO.puts "WTF"
      age >= 16 -> IO.puts "WTF"
      true -> IO.puts "asd"
    end
  end


end

