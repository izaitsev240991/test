"use strict";

(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a;
                }
                var p = n[i] = { exports: {} };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r);
                }, p, p.exports, r, e, n, t);
            }
            return n[i].exports;
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
            o(t[i]);
        }
        return o;
    }
    return r;
})()({
    1: [function(require, module, exports) {
        window.addEventListener('DOMContentLoaded', function() {
            var modals = require('../parts/modals.js');
            var tabs = require('../parts/tabs.js');
            var form = require('../parts/form.js');
            var timer = require('../parts/timer.js');
            var zoom = require('../parts/zoom.js');

            modals();
            tabs();
            form();
            timer();
            zoom();
        });
    }, { "../parts/form.js": 2, "../parts/modals.js": 3, "../parts/tabs.js": 4, "../parts/timer.js": 5, "../parts/zoom.js": 6 }],
    2: [function(require, module, exports) {
        function form() {
            //форма:
            var message = new Object();
            message.loading = 'загрузка...';
            message.success = 'Спасибо,мы свяжимся с вами в ближайшее время';
            message.failure = 'Что-то пошло не так';

            var form = document.getElementsByClassName('main_form'),
                input = document.getElementsByClassName('form_input'),
                statusMessage = document.createElement('div'),
                phoneInput = document.getElementsByName('user_phone');

            var _loop = function _loop(i) {
                phoneInput[i].addEventListener('keyup', function() {
                    phoneInput[i].value = phoneInput[i].value.replace(/[^\d]/g, '');
                });
            };

            for (var i = 0; i < phoneInput.length; i++) {
                _loop(i);
            }

            var _loop2 = function _loop2(i) {
                form[i].addEventListener('submit', function(event) {
                    event.preventDefault();
                    form[i].appendChild(statusMessage);

                    //ajax:

                    var request = new XMLHttpRequest();
                    request.open("POST", '../window/server.php');

                    request.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");

                    var formData = new FormData(form[i]);

                    request.send(formData);

                    request.onreadystatechange = function() {
                        if (request.readyState < 4) {
                            statusMessage.innerHTML = message.loading;
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                statusMessage.innerHTML = message.success;
                            } else {
                                statusMessage.innerHTML = message.failure;
                            }
                        }
                    };
                    for (var _i4 = 0; _i4 < input.length; _i4++) {
                        input[_i4].value = '';
                    }
                });
            };

            for (var i = 0; i < form.length; i++) {
                _loop2(i);
            }
            // слайдер окон:
            var slideIndex = 1,
                slides = document.getElementsByClassName('slider-item'),
                bigSlide = document.getElementsByClassName('current-slide'),
                slideWrap = document.querySelector('.balcon_icons'),
                calcBtn = document.getElementsByClassName('popup_calc_btn'),
                modalCalc = document.getElementsByClassName('popup_calc')[0],
                closeModalCalc = document.getElementsByClassName('popup_calc_close'),
                closeCalcEnd = document.getElementsByClassName('popup_calc_end_close')[0],
                forthBtn = document.getElementsByClassName('forth_button')[0],
                forthSecBtn = document.getElementsByClassName('popup_calc_profile_button')[0],
                forthEndBtn = document.getElementsByClassName('popup_calc_profile_button')[1],
                width = document.getElementById('width'),
                height = document.getElementById('height'),
                viewType = document.getElementById('view_type'),
                cold = document.getElementsByClassName('checkbox')[0],
                warm = document.getElementsByClassName('checkbox')[1],
                modalCalcProf = document.getElementsByClassName('popup_calc_profile')[0],
                modalCalcLast = document.getElementsByClassName('popup_calc_end')[0],
                dataObj = {
                    width: width,
                    height: height,
                    type: viewType,
                    warm: false,
                    cold: false
                };

            width.addEventListener('keyup', function() {
                width.value = width.value.replace(/[^\d]/g, '');
            });

            height.addEventListener('keyup', function() {
                height.value = height.value.replace(/[^\d]/g, '');
            });

            showSlides(slideIndex);

            function showSlides(n) {
                for (var i = 0; i < bigSlide.length; i++) {
                    bigSlide[i].style.display = 'none';
                }
                for (var _i = 0; _i < slides.length; _i++) {
                    slides[_i].classList.remove('slide-active');
                }
                slides[slideIndex - 1].classList.add('slide-active');
                bigSlide[slideIndex - 1].style.display = 'inline-block';
            }

            function currentSlide(n) {
                showSlides(slideIndex = n);
            }

            slideWrap.addEventListener('click', function(event) {
                event.preventDefault();
                for (var i = 0; i < slides.length + 1; i++) {
                    if (event.target.classList.contains('slider-item') && event.target == slides[i - 1]) {
                        currentSlide(i);
                    }
                }
            });

            for (var i = 0; i < calcBtn.length; i++) {
                calcBtn[i].addEventListener('click', function() {
                    modalCalc.style.display = 'block';
                });
            }

            for (var _i2 = 0; _i2 < closeModalCalc.length; _i2++) {
                closeModalCalc[_i2].addEventListener('click', function() {
                    modalCalc.style.display = 'none';
                    modalCalcProf.style.display = 'none';
                });
            }

            closeCalcEnd.addEventListener('click', function() {
                modalCalcLast.style.display = 'none';
            });

            forthBtn.addEventListener('click', function() {
                modalCalc.style.display = 'none';
                modalCalcProf.style.display = 'block';
                dataObj.width = width.value;
                dataObj.height = height.value;
            });

            forthSecBtn.addEventListener('click', function() {
                modalCalcProf.style.display = 'none';
                modalCalcLast.style.display = 'block';
                dataObj.type = viewType.value;
                if (warm.checked) {
                    dataObj.warm = true;
                } else if (cold.checked) {
                    dataObj.cold = true;
                }
            });

            // форма калькулятора:
            var calcForm = document.getElementsByClassName('calc_form')[0];

            calcForm.addEventListener('submit', function(event) {
                event.preventDefault();
                calcForm.appendChild(statusMessage);

                //ajax:

                var request = new XMLHttpRequest();
                request.open("POST", '../window/server.php');

                request.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");

                var formData = new FormData(calcForm);
                formData.append('dataObj', dataObj);

                request.send(formData);

                request.onreadystatechange = function() {
                    if (request.readyState < 4) {
                        statusMessage.innerHTML = message.loading;
                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 300) {
                            statusMessage.innerHTML = message.success;
                        } else {
                            statusMessage.innerHTML = message.failure;
                        }
                    }
                };
                for (var _i3 = 0; _i3 < input.length; _i3++) {
                    input[_i3].value = '';
                }
            });

            // рассчитать стоимость и отправка формы
        }

        module.exports = form;
    }, {}],
    3: [function(require, module, exports) {
        function modals() {

            var headerBtn = document.querySelectorAll('.header_btn')[0],
                phoneBtn = document.querySelectorAll('.phone_link'),
                modalEngineer = document.querySelectorAll('.popup')[0],
                modalHeader = document.querySelectorAll('.popup_engineer')[0],
                closeModalEng = document.querySelectorAll('.popup_close')[0],
                closeModalHeader = document.querySelectorAll('.popup_close')[1],
                closeBackground = document.getElementsByClassName('popup_dialog');

            // модальное окно через 60с:
            function timerModal() {
                modalEngineer.style.display = 'block';
            }
            setTimeout(timerModal, 60000);
            // модальные окна:
            headerBtn.addEventListener('click', function() {
                modalHeader.style.display = 'block';
            });

            closeModalHeader.addEventListener('click', function() {
                modalHeader.style.display = 'none';
            });
            // вызвать замерщика
            for (var i = 0; i < closeBackground.length; i++) {
                closeBackground[i].addEventListener('click', function(e) {
                    if (e.target != this) {
                        return true;
                    }
                    modalHeader.style.display = 'none';
                    modalEngineer.style.display = 'none';
                });
            }
            // закрытие при клике на подложку
            for (var _i5 = 0; _i5 < phoneBtn.length; _i5++) {
                phoneBtn[_i5].addEventListener('click', function(e) {
                    modalEngineer.style.display = 'block';
                });
            }

            closeModalEng.addEventListener('click', function() {
                modalEngineer.style.display = 'none';
            });
            // обратный звонок
        }
        module.exports = modals;
    }, {}],
    4: [function(require, module, exports) {
        function tabs() {
            //табы:
            var tab = document.getElementsByClassName('tab_link'),
                tabContent = document.getElementsByClassName('tab_content'),
                decorTab = document.getElementsByClassName('decor_tab'),
                decorTabContent = document.getElementsByClassName('decor_tab_content');

            function hideTabContent(a) {
                for (var i = a; i < tabContent.length; i++) {
                    tabContent[i].classList.remove('tab_show');
                    tabContent[i].classList.add('tab_hide');
                }
            }
            hideTabContent(1);

            function showTabContent(b) {
                if (tabContent[b].classList.contains('tab_hide')) {
                    hideTabContent(0);
                    tabContent[b].classList.remove('tab_hide');
                    tabContent[b].classList.add('tab_show');
                }
            }

            function removeActive() {
                for (var i = 0; i < tab.length; i++) {
                    tab[i].classList.remove('active');
                }
            }

            function addActive(e) {
                e.classList.add('active');
            }

            var _loop3 = function _loop3(i) {
                tab[i].addEventListener("click", function() {
                    showTabContent(i);
                    removeActive();
                    addActive(this);
                });
            };

            for (var i = 0; i < tab.length; i++) {
                _loop3(i);
            }

            function hideDecContent(a) {
                for (var i = a; i < decorTabContent.length; i++) {
                    decorTabContent[i].classList.remove('tab_show');
                    decorTabContent[i].classList.add('tab_hide');
                }
            }
            hideDecContent(1);

            function showDecContent(b) {
                if (decorTabContent[b].classList.contains('tab_hide')) {
                    hideDecContent(0);
                    decorTabContent[b].classList.remove('tab_hide');
                    decorTabContent[b].classList.add('tab_show');
                }
            }

            function removeDecActive() {
                for (var i = 0; i < decorTab.length; i++) {
                    decorTab[i].classList.remove('after_click');
                }
            }

            function addDecActive(e) {
                e.classList.add('after_click');
            }

            var _loop4 = function _loop4(i) {
                decorTab[i].addEventListener("click", function() {
                    showDecContent(i);
                    removeDecActive();
                    addDecActive(this);
                });
            };

            for (var i = 0; i < decorTab.length; i++) {
                _loop4(i);
            }
        }
        module.exports = tabs;
    }, {}],
    5: [function(require, module, exports) {
        function timer() {
            //таймер:
            StartCountDown("timer1", "07/05/2018 21:00");

            function StartCountDown(myDiv, myTargetDate) {
                var dthen = new Date(myTargetDate);
                var dnow = new Date();
                var ddiff = new Date(dthen - dnow);
                var gsecs = Math.floor(ddiff.valueOf() / 1000);
                CountBack(myDiv, gsecs);
            }

            function Calcage(secs, num1, num2) {
                var s = (Math.floor(secs / num1) % num2).toString();
                if (s.length < 2) {
                    s = "0" + s;
                }
                return s;
            }

            function CountBack(myDiv, secs) {
                var timeArr = [],
                    holder;
                if (secs > 0) {
                    timeArr.days = Calcage(secs, 86400, 100000).split('');
                    timeArr.hours = Calcage(secs, 3600, 24).split('');
                    timeArr.minutes = Calcage(secs, 60, 60).split('');
                    timeArr.seconds = Calcage(secs, 1, 60).split('');

                    Object.keys(timeArr).map(function(key) {
                        holder = document.getElementById(key);
                        for (var i = 0; i < holder.childNodes.length; ++i) {
                            switch (holder.childNodes[i].className) {
                                case "left":
                                    holder.childNodes[i].innerHTML = timeArr[key][0];
                                    break;
                                case "right":
                                    holder.childNodes[i].innerHTML = timeArr[key][1];
                                    break;
                                default:
                                    break;
                            }
                        }
                    });
                    setTimeout(function() {
                        CountBack(myDiv, secs - 1);
                    }, 990);
                }
            }
        }
        module.exports = timer;
    }, {}],
    6: [function(require, module, exports) {
        function zoom() {
            //увел при клике:
            var images = document.querySelectorAll('.zoom_img'),
                works = document.querySelector('.works'),
                modal = document.querySelector('.modal'),
                modalImg = document.querySelector('.modal > img'),
                modalBg = document.createElement('div');

            modalBg.classList.add('zoom_overlay');

            [].forEach.call(images,function(item) {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    var imgSrc = this.getAttribute('href');
                    callImageModal(imgSrc);
                });
            });

            function callImageModal(src) {
                modalImg.src = src;
                modal.style.display = 'block';
                works.appendChild(modalBg);
            }

            modalBg.addEventListener('click', function() {
                modal.style.display = 'none';
                works.removeChild(modalBg);
            });
        }

        module.exports = zoom;
    }, {}]
}, {}, [1]);