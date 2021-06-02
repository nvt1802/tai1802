import { firestore } from "firebaseConfig"

export function createData() {
  var testRef = firestore.collection("test")
  testRef.doc("A").set({
    name: "Nguyễn Văn Tài",
    gender: "Nam",
  })
  testRef.doc("B").set({
    name: "Hoàng Thị Thu Hiền",
    gender: "Nữ",
  })
  testRef.doc("C").set({
    name: "Cúc Tịnh Y",
    gender: "Nữ",
  })
  testRef.doc("D").set({
    name: "Tống Hân Nhiễm",
    gender: "Nữ",
  })
  testRef.doc("E").set({
    name: "Triệu Lộ Tư",
    gender: "Nữ",
  })
  testRef.doc("F").set({
    name: "Hinh Phi",
    gender: "Nữ",
  })
  testRef.doc("G").set({
    name: "Lương Khiết",
    gender: "Nữ",
  })
  testRef.doc("H").set({
    name: "Ngu Thư Hân",
    gender: "Nữ",
  })
}
