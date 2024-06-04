// Tạo một số hằng số để quản lý các dữ liệu chuỗi
const UBER_CAR = "uberCar"
const UBER_SUV = "uberSUV"
const UBER_BLACK = "uberBlack"

function timKiemGiaTienKmDauTien(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 8000
    }
    case UBER_SUV: {
      return 9000
    }
    case UBER_BLACK: {
      return 10000
    }
  }
}

function timKiemGiaTienTu1Den19(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 7500
    }
    case UBER_SUV: {
      return 8500
    }
    case UBER_BLACK: {
      return 9500
    }
  }
}

function timKiemGiaTienTu19TroLen(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 7000
    }
    case UBER_SUV: {
      return 8000
    }
    case UBER_BLACK: {
      return 9000
    }
  }
}

function timKiemGiaTienThoiGianCho(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 2000
    }
    case UBER_SUV: {
      return 3000
    }
    case UBER_BLACK: {
      return 3500
    }
  }
}

document.getElementById("btnTinhTien").onclick = function () {
  console.log("Tôi là nút tính tiền")
  // Truy xuất và lấy dữ liệu của các input số km, thời gian chờ, và loại xe
  let soKm = document.getElementById("txt-km").value * 1
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1

  console.log(soKm)
  console.log(thoiGianCho)

  //   let loaiXe = document.querySelector("li input:checked")
  let loaiXe = document.querySelector("input[type='radio']:checked").value
  console.log(loaiXe)

  // Xử lý tìm kiếm giá tiền phù hợp
  let tienKmDauTien = timKiemGiaTienKmDauTien(loaiXe)
  let tienKmTu1Den19 = timKiemGiaTienTu1Den19(loaiXe)
  let tienKmTu19TroLen = timKiemGiaTienTu19TroLen(loaiXe)
  let tienThoiGianCho = timKiemGiaTienThoiGianCho(loaiXe)
  console.log(tienKmDauTien)
  console.log(tienKmTu1Den19)
  console.log(tienKmTu19TroLen)
  console.log(tienThoiGianCho)

  let tongTien = 0
  if (soKm <= 1) {
    // TH1 Người dùng đi trong khoảng 1km
    tongTien = tienKmDauTien * soKm
  } else if (soKm > 1 && soKm <= 19) {
    // TH2 Người dùng đi trong khoảng 1 đến 19
    tongTien = tienKmDauTien + (soKm - 1) * tienKmTu1Den19
  } else {
    // TH3 Người dùng đi trên 19km
    tongTien =
      tienKmDauTien + 18 * tienKmTu1Den19 + (soKm - 19) * tienKmTu19TroLen
  }
  console.log(tongTien)

  // BTVN (Tính thời gian chờ) 10p ==> (10 - 3) / 3 ==> 3.... => 3 * 2000 ==> 6000
  if (thoiGianCho > 3) {
    let soLanCho = Math.floor((thoiGianCho - 3) / 3)
    let tongTienThoiGianCho = soLanCho * tienThoiGianCho
    tongTien += tongTienThoiGianCho
  }

  // Hiển thị tổng tiền
  document.getElementById("divThanhTien").style.display = "block"
  document.getElementById("xuatTien").innerHTML = tongTien.toLocaleString(
    "vi",
    {
      currency: "VND",
      style: "currency",
    }
  )
}

// BTVN - Chức năng in hoá đơn
document.getElementById("btnInHoaDon").onclick = function () {
  // Lấy dữ liệu người dùng đã nhập
  let soKm = document.getElementById("txt-km").value * 1
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1
  let loaiXe = document.querySelector("input[type='radio']:checked").value

  // Xử lý tìm kiếm giá tiền phù hợp
  let tienKmDauTien = timKiemGiaTienKmDauTien(loaiXe)
  let tienKmTu1Den19 = timKiemGiaTienTu1Den19(loaiXe)
  let tienKmTu19TroLen = timKiemGiaTienTu19TroLen(loaiXe)
  let tienThoiGianCho = timKiemGiaTienThoiGianCho(loaiXe)

  // Tính tổng tiền
  let tongTien = 0
  if (soKm <= 1) {
    tongTien = tienKmDauTien * soKm
  } else if (soKm > 1 && soKm <= 19) {
    tongTien = tienKmDauTien + (soKm - 1) * tienKmTu1Den19
  } else {
    tongTien =
      tienKmDauTien + 18 * tienKmTu1Den19 + (soKm - 19) * tienKmTu19TroLen
  }

  if (thoiGianCho > 3) {
    let soPhienCho = Math.floor((thoiGianCho - 3) / 3)
    tongTien += soPhienCho * tienThoiGianCho
  }

  // Tạo nội dung hóa đơn chi tiết
  let loaiXeText = ""
  switch (loaiXe) {
    case "uberCar":
      loaiXeText = "Uber Car"
      break
    case "uberSUV":
      loaiXeText = "Uber SUV"
      break
    case "uberBlack":
      loaiXeText = "Uber Black"
      break
  }

  let chiTietHoaDon = `
  <div class="table-responsive">
      <table class="table table-bordered table-striped">
          <thead>
              <tr>
                  <th colspan="4" style="text-align: center; background-color: #d3d3d3;">CHI TIẾT HOÁ ĐƠN</th>
              </tr>
              <tr>
                  <th>LOẠI XE</th>
                  <th colspan="3">${loaiXeText}</th>
              </tr>
              <tr>
                  <th>CHI TIẾT</th>
                  <th>SỬ DỤNG</th>
                  <th>ĐƠN GIÁ (1000đ)</th>
                  <th>THÀNH TIỀN (1000đ)</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>KM ĐẦU TIÊN</td>
                  <td>1 km</td>
                  <td>${(tienKmDauTien / 1000).toFixed(3)} VND</td>
                  <td>${(tienKmDauTien / 1000).toFixed(3)} VND</td>
              </tr>`

  if (soKm > 1 && soKm <= 19) {
    chiTietHoaDon += `
              <tr>
                  <td>Từ 1km đến 19km</td>
                  <td>${soKm - 1} km</td>
                  <td>${(tienKmTu1Den19 / 1000).toFixed(3)} VND</td>
                  <td>${(((soKm - 1) * tienKmTu1Den19) / 1000).toFixed(
                    3
                  )} VND</td>
              </tr>`
  } else if (soKm > 19) {
    chiTietHoaDon += `
              <tr>
                  <td>Từ 1km đến 19km</td>
                  <td>18 km</td>
                  <td>${(tienKmTu1Den19 / 1000).toFixed(3)} VND</td>
                  <td>${((18 * tienKmTu1Den19) / 1000).toFixed(3)} VND</td>
              </tr>
              <tr>
                  <td>Từ 19km trở lên</td>
                  <td>${soKm - 19} km</td>
                  <td>${(tienKmTu19TroLen / 1000).toFixed(3)} VND</td>
                  <td>${(((soKm - 19) * tienKmTu19TroLen) / 1000).toFixed(
                    3
                  )} VND</td>
              </tr>`
  }

  if (thoiGianCho > 3) {
    let soPhienCho = Math.floor((thoiGianCho - 3) / 3)
    chiTietHoaDon += `
              <tr>
                  <td>Thời gian chờ (trên 3 phút)</td>
                  <td>${soPhienCho * 3} phút</td>
                  <td>${(tienThoiGianCho / 1000).toFixed(3)} VND</td>
                  <td>${((soPhienCho * tienThoiGianCho) / 1000).toFixed(
                    3
                  )} VND</td>
              </tr>`
  }

  chiTietHoaDon += `
              <tr>
                  <td colspan="3">TỔNG TIỀN</td>
                  <td class='text-danger font-weight-bold'>${(tongTien / 1000).toFixed(3)} VND</td>
              </tr>
          </tbody>
      </table>
  </div>`

  document.getElementById("modal-body").innerHTML = chiTietHoaDon

  // Gọi tới modal và hiển thị
  $("#exampleModal").modal("show")
}
