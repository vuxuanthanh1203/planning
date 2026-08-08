# Nhật Ký Hẹn Hò

Trang: https://vuxuanthanh1203.github.io/planning/ — link này không bao giờ đổi.

## Cách thêm một buổi hẹn mới

Mở `data.js`, copy một khối `{ ... }` trong `window.DATES`, sửa lại rồi push:

```js
{
  no: 2,                      // số thứ tự, hiện lên thành "№ 02"
  id: '2026-09-05',           // dùng cho link, nên đặt bằng ngày
  title: 'Tên buổi hẹn',
  date: '2026-09-05',         // YYYY-MM-DD — thứ trong tuần tự tính
  place: 'Hà Nội',
  range: '09:00 – 21:00',     // hiện ở dòng mô tả
  cover: 'img/anh-bia.jpg',   // ảnh bìa ngoài trang chủ (bỏ được)
  schedule: [
    { time: '09:00', end: '10:00', title: 'Đón nàng' },
    {
      time: '10:00', end: '12:00', title: 'Một mốc có đầy đủ thứ',
      photo: 'img/anh.jpg',                    // ảnh trong mốc      (tuỳ chọn)
      photoAlt: 'mô tả ảnh',
      venue: {                                  // địa điểm + bản đồ  (tuỳ chọn)
        name: 'Tên quán',
        address: 'Địa chỉ',
        map: 'https://www.google.com/maps/search/?api=1&query=...'
      },
      sub: [                                    // lịch nhỏ bên trong (tuỳ chọn)
        { time: '10:00 – 10:30', title: 'Việc nhỏ' }
      ]
    }
  ]
}
```

Ảnh để trong thư mục `img/`. Buổi mới nhất tự động hiện lên đầu trang.

## Deploy

```bash
git add -A && git commit -m "them buoi hen moi" && git push
```

GitHub Pages tự build lại, khoảng 1 phút sau là trang cập nhật.
