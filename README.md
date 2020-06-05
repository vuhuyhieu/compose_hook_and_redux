# Sử dụng React Hook thay cho Component

### 1. this.setState và useState  
Ở trong class component, ta có khái niệm về `state`. Khi `state` thay đổi, component sẽ được render lại. Ở trong **hook**, nguyên lý về state vẫn giống vậy, chỉ có cách viết khác đi. Ví dụ, ở trong component, khi muốn khai báo một state, ta sử dụng:
```
constructor(props) {
  super(props);
  this.state = {
    count: 0,
  };
}
```
Và khi muốn thay đổi giá trị trong state, ta viết: 
```
this.setState({counter: counterValue})
```
Đối với hook, khi khai báo state, ta có thể khai báo cả một cục state, hoặc tách state ra từng phần nhỏ. Ta sẽ thử thực hiện từng cách một.

Trước tiên, ta cần import `useState`
```
import React, {useState} from 'react';
```
Và cách dùng:
- **Cách 1 (gom tất cả giá trị vào trong cục state)**: Khi muốn khai báo state:
```
const [state, setState] = useState({counter: 0})
```
Và khi muốn thay đổi giá trị của counter, ta viết:
```
setState(state => {...state, counter:counterValue})
```
Trong đó, `...state` sử dụng để sao chép lại giá trị của những thành phần khác trong state. Nếu không có `...state`, những giá trị khác ngoài `counter` sẽ bị mất hết.  
- **Cách 2 (khai báo từng thành phần nhỏ)**: Khi muốn khai báo counter:
```
const [counter, setCounter] = useState(0) <-- //'0' là giá trị mặc định của counter
const [loading, setLoading] = useState(false) <-- //false là giá trị mặc định của loading
```
Với cách này, khi muốn thay đổi giá trị của những thành phần nhỏ trong state, ta  sử dụng trực tiếp hàm set của giá trị:
```
setCounter(counter++) || setCounter(10)
setLoading(!loading) || setLoading(true) 
```
Hai cách viết này về cơ bản chỉ khác nhau ở cú pháp. Còn khi một giá trị bất kỳ thay đổi, dù là counter hay loading, cả màn hình vẫn sẽ bị render lại. Không có sự khác biệt về hiệu năng hay số lần render lại ở 2 cách viết này.
### 2. component lifecycle và useEffect
Như đã đề cập ở phía trên, đối với hook, ta không còn các khái niệm về `componentDidMount` hay `componentWillReceiveProps`. Thay vào đó ta sử dụng `useEffect`.

  
Trong hook nói riêng và functional programming nói chung, ta có một khái niệm, đó là **side effect** (gọi ngắn gọn là **effect**). Một hàm được gọi là có **side-effect**, nếu như nó gây ra những **hiệu ứng** bên ngoài phạm vi khai báo của nó. Ví dụ đơn giản, khi chúng ta render một màn hình xong, ta sẽ muốn fetch data từ server về. Viết bằng hook như sau:
```
const [data, setData] = useState([]);
async fetchData(){
  const response = await getDataFromServer(); //hàm này dùng để lấy data về
  if (response.data){
    setData(response.data)
  }
}
```
Ở đây, hàm `fetchData()` đã gây ra một **hiệu ứng** nằm bên ngoài phạm vi của nó, đó là nó đã thay đổi giá trị của `data` thông qua `setData`. Đó chính là một **side-effect** (hay **effect**).  

Thông thường, chúng ta thường xuyên sử dụng effect. Fetch dữ liệu, thay đổi state, lắng nghe hay hủy bỏ 1 sự kiện từ người dùng đều là các **effect**. Và mỗi khi chúng ta tạo ra một **effect**, thì hàm `useEffect` sẽ được gọi tới.

Từ đây, ta tìm cách sử dụng `useEffect` sao cho hợp lý nhất. Theo [document](https://reactjs.org/docs/hooks-effect.html) của React, useEffect được dùng như sau: 
```
import React, {useEffect} from 'react';
useEffect(() => {
  /*gọi các hàm khi useEffect được gọi tới ở đây*/
})
```
**Một lưu ý (không hề nhỏ)** đó là ta cần cẩn thận khi gọi `setState` ở trong `useEffect`. Như đã đề cập ở trên, setState sẽ tạo ra một effect, do đó nó sẽ gọi lại hàm useEffect. Vậy nên nếu không cẩn thận, nó sẽ gây ra một vòng lặp vô hạn. Và nếu gọi api trên môi trường live hoặc uat ở trong `useEffect`, vòng lặp vô hạn đó có thể dẫn tới sập server.

Để tránh việc infinite loop như vậy, ta cần sử dụng thêm một tham số nếu muốn gọi `setState` ở trong `useEffect`:
```
useEffect(() => {
  setData(response.data);
}, [data]); <-- /*tham số này có nghĩa là useEffect chỉ được gọi khi data thay đổi*/
```

Ta có thể rút ra một vài cách dùng `useEffect` từ nguyên lý trên:
- Sử dụng `useEffect` để fetch dữ liệu khi mới vào màn hình (thay `componentDidMount`)
```
const [data, setData] = useState([]);
useEffect(() => {
  const response = await getDataFromServer(); //hàm này dùng để lấy data về
  if (response.data){
    setData(response.data)
  }
}, [data]);
```
Đối với đoạn code trên, `useEffect` sẽ được gọi khi vừa vào màn hình. Và chừng nào `data` còn chưa thay đổi thì `useEffect` trên sẽ không được gọi lại.
- Sử dụng `useEffect` khi có 1 props truyền vào từ bên ngoài thay đổi (thay cho `componentWillReceiveProps`)
```
const [counter, setCounter] = useState([props.counter])
useEffect(() => {
  setCounter(props.counter)
}, [props.counter])
```
Như vậy, đối với đoạn code trên, khi biến `counter` được truyền từ `props` (`props.counter`) thay đổi, hàm `useEffect` sẽ được gọi để cập nhật lại giá trị của counter. 
- Sử dụng `useEffect` để thêm và loại bỏ các listener (thay cho `componentWillUnmount`)  
Giả sử ta có 1 timer đếm ngược 60s để cho user nhập OTP. Sau 60s thì OTP sẽ tự động ẩn. Và khi màn OTP bị ẩn đi thì phải chạy hàm `clearInterval` để xóa interval đi.
```
const [timer, setTimer] = useState(60);
useEffect(() => {
  const interval = setInterval(() => setTime(time - 1), 1000);
  return () => clearInterval(interval); <-- /*clearInterval sẽ được gọi khi ẩn màn hình*/ 
}, [time]);
```

### 3. React Hook và Redux
Về cơ bản, khi sử dụng Redux ở trong Hook thì các file actions, store và reducer không có gì thay đổi cả. Nguyên lý của Redux vẫn giữ nguyên như vậy. Chỉ khác ở syntax trong file component.  
Khi viết bằng Hook, `mapStateToProps` và `mapDispatchToProps` sẽ không còn cần thiết nữa. Thay vào đó, ta viết như sau:
- Sử dụng `useSelector` để đọc 1 thuộc tính từ reducer ra
```
import {useSelector} from 'react-redux'
const id = useSelector(state => state.authReducer.authData.id)
```
- Sử dụng `useDispatch` và `useCallback` để dispatch một action đi
```
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
const dispatch = useDispatch();
const onLoginSuccess = useCallback(
  () => dispatch({type: LOGIN_SUCCESS_ACTION, data: loginSuccessData}), 
  [dispatch]
); 
``` 
### 4. Sử dụng useMemo trong Hooks
... còn nữa, chưa viết xong
