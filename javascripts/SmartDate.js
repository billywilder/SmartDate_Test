//Библиотека арифметических операций над датами
//Создаем конструктор класса SmartDate()
function SmartDate(dateObject) {
  this.baseDate = new Date(dateObject.getTime());
}
//Добавляем в класс SmartDate() метод add()
SmartDate.prototype.add = function(number, type) {
  switch (type) {
    case 'y':
      this.baseDate.setFullYear(this.baseDate.getFullYear() + number);
    break;
    case 'm':
      this.baseDate.setMonth(this.baseDate.getMonth() + number);
    break;
    case 'd':
      this.baseDate.setDate(this.baseDate.getDate() + number);
    break;
    case 'h':
      this.baseDate.setHours(this.baseDate.getHours() + number);
    break;
    case 'min':
      this.baseDate.setMinutes(this.baseDate.getMinutes() + number);
    break;
    case 's':
      this.baseDate.setSeconds(this.baseDate.getSeconds() + number);
    break;
    case 'ms':
      this.baseDate.setMilliseconds(this.baseDate.getMilliseconds() + number);
    break;
  }
}

//Добавляем в класс SmartDate() метод substract()
SmartDate.prototype.substract = function(number, type) {
  switch (type) {
    case 'y':
      this.baseDate.setFullYear(this.baseDate.getFullYear() - number);
    break;
    case 'm':
      this.baseDate.setMonth(this.baseDate.getMonth() - number);
    break;
    case 'd':
      this.baseDate.setDate(this.baseDate.getDate() - number);
    break;
    case 'h':
      this.baseDate.setHours(this.baseDate.getHours() - number);
    break;
    case 'min':
      this.baseDate.setMinutes(this.baseDate.getMinutes() - number);
    break;
    case 's':
      this.baseDate.setSeconds(this.baseDate.getSeconds() - number);
    break;
    case 'ms':
      this.baseDate.setMilliseconds(this.baseDate.getMilliseconds() - number);
    break;
  }
  if (number instanceof Object) {
    this.baseDate.setTime(this.baseDate.getTime()-number.getTime());
  }
}

//Добавляем в класс SmartDate() метод toDate()
SmartDate.prototype.toDate = function() {
  return this.baseDate;
}

//Переопределяем метод toString() для класса SmartDate()
SmartDate.prototype.toString = function() {
  return this.baseDate.toString();
}