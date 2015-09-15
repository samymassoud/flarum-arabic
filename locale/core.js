app.translator.plural = function(count) {
  if (count >= 0 && count < 2) {
    return 'one';
    }
  else {
    return 'other';
  }
};

var monthsShortDot = 'يناير._فبراير._مارس._أبريل._مايو._يونيو._يوليو._أغسطس._سبتمبر._أكتوبر._نوفمبر._ديسمبر'.split('_'),
    monthsShort = 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_');

moment.locale('ar', {
        months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort : function (m, format) {
            if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysMin : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [من] MMMM [من] YYYY',
            LLL : 'D [من] MMMM [من] YYYY H:mm',
            LLLL : 'dddd, D [من] MMMM [من] YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[اليوم ' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[غدا فى ' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[أمس فى' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'منذ %s',
            s : 'ثوان قليلة',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'واحد ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'عام',
            yy : '%d أعوام'
        },
        ordinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1,
            doy : 4 
        }
    });

