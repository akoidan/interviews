package main

import (
	"fmt"
	"strconv"
)

var pl = fmt.Println

func main() {
	iAge := 8
	if (iAge >= 1) && (iAge <= 19) {
		pl("Important Birthday")
	} else if iAge == 21 || iAge == 50 {
		 
	}
}
func main1() {
	var cv1 = 1.5
	cv2 := int(cv1)
	pl(cv2)
	cv4, err := strconv.Atoi("50000")
	pl(cv4, err)
	if cv8, err := strconv.ParseFloat("2312.12", 64); err == nil {
		pl(cv8)
	}
	//pl(reflect.TypeOf(25))
	//pl(reflect.TypeOf(25.14))
	//pl(reflect.TypeOf(true))
	//pl(reflect.TypeOf("Hello"))
	//reader := bufio.NewReader(os.Stdin)
	//name, err := reader.ReadString('\n')
	//if err == nil {
	//	pl("Hello", name)
	//}
	//var vName string = "Derek"
	//var v1, v2 = 1.2, 3.4
	//v1 = 4.5

}
