// js 中的函数调用堆栈是先进后执行，出栈的时候执行

const func1 = () => {
  func2()
}

const func2 = () => {
  func3()
}

const func3 = () => {}

func1()
