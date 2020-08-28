/**
 * Created by nhatnk on 4/26/17.
 */
// Sao chép dự án có sẵn từ GitHub: https://github.com/codegym-vn/objects
//Bước 2: Chạy ứng dụng và chỉnh sửa:
//Thay thế ảnh nhân vật bằng một ảnh khác
// Thêm thuộc tính speed (tốc độ) cho đối tượng Hero (tốc độ hiện tại đang được để cố định là 20)
// Viết thêm các hàm để nhân vật có thể di chuyển xung quanh màn hình
function Hero(image, top, left, size,speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
        ' height="' + this.size + '"' +
        ' src="' + this.image + '"' +
        ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += this.speed;
  }
  this.moveDown = function () {
    this.top += this.speed;
  }
  this.moveLeft = function () {
    this.left -= this.speed;
  }
  this.moveUp = function () {
    this.top -= this.speed;
  }
}

var hero = new Hero('walking.gif', 20, 30, 200, 10);

function start(){
  if(hero.left < window.innerWidth - hero.size && hero.top < hero.size){
    hero.moveRight();
  }
  else if(hero.left >= window.innerWidth - hero.size && hero.top < window.innerHeight-hero.size){
    hero.moveDown();
  }
  else if(hero.left > hero.size && hero.top >= window.innerHeight-hero.size){
    hero.moveLeft();
  }
  else if(hero.left <=  hero.size && hero.top >= hero.size){
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 60)
}

start();