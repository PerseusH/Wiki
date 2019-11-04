go build test.go #在当前目录下将源文件编译为可执行文件exe
go build -o go/bin/start.exe start.go #指定路径的编译
go run test.go #运行源文件
go tool compile -N -S -l test.go #查看程序汇编码
go tool compile -m test.go #变量逃逸分析
go run -gcflags '-m -l' test.go #变量逃逸分析
go build main.go && ./main #编译后查看变量内存地址
go tool pprof http://localhost:8080/debug/pprof/profile #性能监控(先安装Graphviz)
go clean -x -i dir/pkg #清除已生成的包
    -x 执行并打印命令
    -i 会同时删除安装当前代码包时所产生的结果文件
    -r 删除当前代码包的所有依赖包的目录和文件
go env #查看编译环境
    GOARCH="amd64"
    GOEXE=""
    GOHOSTARCH="amd64"
    GOHOSTOS="darwin"
    GOOS="darwin"
    GOROOT="/usr/local/go"
    GOTOOLDIR="/usr/local/go/pkg/tool/darwin_amd64"
go install -> 编译后的main包可执行文件放在$GOPATH/bin中，其他包文件放在$GOPATH/pkg中
    go install xxx -> xxx不是包名而是'路径'
    -> 首先创建一个文件夹，$ mkdir $GOPATH/src/github.com/user/hello，在这个文件夹下面编辑main.go
        package main
        import "fmt"
        func main() {
            fmt.Printf("Hello, world.\n")
        }
    -> 现在想把hello命令编译到$GOPATH/bin目录下面，只需要 $ go install github.com/user/hello，或者cd到hello目录下面，直接运行go install

|Go语言性能分析. go pprof可帮助开发者快速分析及定位各种性能问题，如CPU消耗、内存分配及阻塞分析
    $ yum install graphiviz //安装第三方图形化显式分析数据工具（Graphviz）
    $ go get github.com/pkg/profile //安装第三方性能分析来分析代码包
    -> 基准测试代码cpu.go
        package main
        import (
            "github.com/pkg/profile"
            "time"
        )
        func joinSlice() []string {
            var arr []string
            for i := 0; i < 100000; i++ {
             // 故意造成多次的切片添加(append)操作, 由于每次操作可能会有内存重新分配和移动, 性能较低
                arr = append(arr, "arr")
            }
            return arr
        }
        func main() {
            // 开始性能分析, 返回一个停止接口
            stopper := profile.Start(profile.CPUProfile, profile.ProfilePath("."))
            // 在main()结束时停止性能分析
            defer stopper.Stop()
            // 分析的核心逻辑
            joinSlice()
            // 让程序至少运行1秒
            time.Sleep(time.Second)
        }
    -> 性能分析需要可执行配合才能生成分析结果，因此使用命令行对程序进行编译，代码如下
        $ go build -o cpu cpu.go
        $ ./cpu
        $ go tool pprof --pdf cpu cpu.pprof > cpu.pdf
        -> 查看分析结果cpu.pdf,发现joinSlice 函数耗费了 50% 的 CPU 时间，存在性能瓶颈

        //改进代码
        func joinSlice() []string {
            const count = 100000
            var arr []string = make([]string, count) //将切片'预分配'count个空间，避免之前使用 append() 函数的'多次分配空间'
            for i := 0; i < count; i++ {
                arr[i] = "arr"
            }
            return arr
        }
