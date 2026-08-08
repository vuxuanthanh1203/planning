/* ------------------------------------------------------------------
   NHẬT KÝ HẸN HÒ — dữ liệu các buổi hẹn
   Thêm buổi mới: copy một khối { ... } rồi sửa. Không cần đụng index.html
   ------------------------------------------------------------------ */

window.DATES = [

  {
    no: 1,
    id: '2026-08-09',
    title: 'Một Ngày Của Chúng Mình',
    date: '2026-08-09',        // YYYY-MM-DD
    place: 'Hà Đông',
    range: '10:00 – 22:00',
    cover: 'img/someli-p301.jpg',
    schedule: [
      { time: '10:00', end: '11:00', title: 'Đón nàng' },
      { time: '11:00', end: '12:00', title: 'Cơm gà Hội An' },
      {
        time: '12:00', end: '17:00', title: 'Check-in homestay',
        photo: 'img/someli-p301.jpg',
        photoAlt: 'Phòng P301 Creamy — Someli Homestay',
        venue: {
          name: 'Someli Homestay · P301 “Creamy”',
          address: '59A Yên Bình, Hà Đông',
          map: 'https://www.google.com/maps/search/?api=1&query=Someli+Homestay+59A+Y%C3%AAn+B%C3%ACnh+H%C3%A0+%C4%90%C3%B4ng'
        },
        sub: [
          { time: '12:00 – 12:15', title: 'Nhận phòng, cất đồ' },
          { time: '12:15 – 13:00', title: 'Ăn trưa cơm gà' },
          { time: '13:00 – 14:30', title: 'Ngủ trưa' },
          { time: '14:30 – 15:30', title: 'Học bài' },
          { time: '15:30 – 16:40', title: 'Xem phim, nghe nhạc cùng nhau' },
          { time: '16:40 – 17:00', title: 'Dọn đồ, chuẩn bị trả phòng' }
        ]
      },
      { time: '17:00', end: '18:00', title: 'Check-out' },
      { time: '18:00', end: '20:00', title: 'Nướng A Choén' },
      { time: '20:00', end: '22:00', title: 'Hát ở Music Box' },
      { time: '22:00', end: '23:30', title: 'Về nhà' }
    ]
  }

];
