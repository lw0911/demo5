﻿/*
* Slides, A Slideshow Plugin for jQuery
* Intructions: http://slidesjs.com
* By: Nathan Searles, http://nathansearles.com
* Version: 1.0.7
* Updated: December 29th, 2010
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

(function ($) {
    $.fn.h_slides = function (option) {
        option = $.extend({}, $.fn.h_slides.option, option);
        return this.each(function () {

            $('.' + option.container, $(this)).children().wrapAll('<div class="h_slides_control"/>');
            //            alert($('.h_slides_control', elem).children().size());
            var elem = $(this), control = $('.h_slides_control', elem), total = control.children().size(), width = control.children().outerWidth(), height = control.children().outerHeight(), start = option.start - 1, effect = option.effect.indexOf(',') < 0 ? option.effect : option.effect.replace(' ', '').split(',')[0], paginationEffect = option.effect.indexOf(',') < 0 ? effect : option.effect.replace(' ', '').split(',')[1], next = 0, prev = 0, number = 0, current = 0, loaded, active, clicked, position, direction;
            if (total < 2) {
                return;
            }
            if (start < 0) {
                start = 0;
            }
            ;
            if (start > total) {
                start = total - 1;
            }
            ;
            if (option.start) {
                current = start;
            }
            ;
            if (option.randomize) {
                control.randomize();
            }
            $('.' + option.container, elem).css({ overflow: 'hidden', position: 'relative' });
            control.css({ position: 'relative', width: (width * 3), height: height, left: -width });
            control.children().css({ position: 'absolute', top: 0, left: width, zIndex: 0, display: 'none' });
            if (option.autoHeight) {
                control.animate({ height: control.children(':eq(' + start + ')').outerHeight() }, option.autoHeightSpeed);
            }
            if (option.preload && control.children()[0].tagName == 'IMG') {
                elem.css({ background: 'url(' + option.preloadImage + ') no-repeat 50% 50%' });
                var img = $('img:eq(' + start + ')', elem).attr('src') + '?' + (new Date()).getTime();
                $('img:eq(' + start + ')', elem).attr('src', img).load(function () {
                    $(this).fadeIn(option.fadeSpeed, function () {
                        $(this).css({ zIndex: 5 });
                        elem.css({ background: '' });
                        loaded = true;
                    });
                });
            } else {
                control.children(':eq(' + start + ')').fadeIn(option.fadeSpeed, function () {
                    loaded = true;
                });
            }
            if (option.bigTarget) {
                control.children().css({ cursor: 'pointer' });
                control.children().click(function () {
                    animate('next', effect);
                    return false;
                });
            }
            if (option.hoverPause && option.play) {
                control.children().bind('mouseover', function () {

                    stop();
                });
                control.children().bind('mouseleave', function () {
                    pause();
                });
            }
            if (option.generateNextPrev) {
                $('.' + option.container, elem).after('<a href="#" class="' + option.prev + '">Prev</a>');
                $('.' + option.prev, elem).after('<a href="#" class="' + option.next + '">Next</a>');
            }
            $('.' + option.next, elem).click(function (e) {
                e.preventDefault();
                if (option.play) {
                    pause();
                }
                ;
                animate('next', effect);
            });
            $('.' + option.prev, elem).click(function (e) {
                e.preventDefault();
                if (option.play) {
                    pause();
                }
                ;
                animate('prev', effect);
            });
            if (option.generatePagination) {
                elem.append('<em class=' + option.paginationClass + '></em>');
                control.children().each(function () {
                    $('.' + option.paginationClass, elem).append('<a n="#' + number + '" href="#' + number + '">' + (number + 1) + '</a>');
                    number++;
                });

            } else {
                $('.' + option.paginationClass + ' a', elem).each(function () {
                    $(this).attr('href', '#' + number).attr('n', '#' + number);
                    number++;
                });
            }
            $('.' + option.paginationClass + ' a[n=#' + start + ']', elem).addClass('h_current');
            $('.' + option.paginationClass + ' a', elem).click(function () {

                if (option.play) {
                    pause();
                }
                ;
                clicked = $(this).attr('href').replace(/.*#/g, '');
                if (current != clicked) {
                    animate('pagination', paginationEffect, clicked);
                }
                return false;
            });
            $('a.link', elem).click(function () {
                if (option.play) {
                    pause();
                }
                ;
                clicked = $(this).attr('href').replace('#', '') - 1;
                if (current != clicked) {
                    animate('pagination', paginationEffect, clicked);
                }
                return false;
            });
            if (option.play) {
                playInterval = setInterval(function () {
                    animate('next', effect);
                }, option.play);
                elem.data('interval', playInterval);
            }
            ;
            function stop() {
                clearInterval(elem.data('interval'));
            }
            ;
            function pause() {
                if (option.pause) {
                    clearTimeout(elem.data('pause'));
                    clearInterval(elem.data('interval'));
                    pauseTimeout = setTimeout(function () {
                        clearTimeout(elem.data('pause'));
                        playInterval = setInterval(function () {
                            animate("next", effect);
                        }, option.play);
                        elem.data('interval', playInterval);
                    }, option.pause);
                    elem.data('pause', pauseTimeout);
                } else {
                    stop();
                }
            }
            ;
            function animate(direction, effect, clicked) {
                if (!active && loaded) {
                    active = true;
                    switch (direction) {
                        case 'next':
                            prev = current;
                            next = current + 1;
                            next = total === next ? 0 : next;
                            position = width * 2;
                            direction = -width * 2;
                            current = next;
                            break;
                        case 'prev':
                            prev = current;
                            next = current - 1;
                            next = next === -1 ? total - 1 : next;
                            position = 0;
                            direction = 0;
                            current = next;
                            break;
                        case 'pagination':
                            next = parseInt(clicked, 10);
                            
                            prev = $('.' + option.paginationClass + ' a.h_current', elem).attr('href').replace(/.*#/g, '');
                            if (next > prev) {
                                position = width * 2;
                                direction = -width * 2;
                            } else {
                                position = 0;
                                direction = 0;
                            }
                            current = next;
                            break;
                    }

                    if (effect === 'fade') {
                        option.animationStart();
                        if (option.crossfade) {
                            control.children(':eq(' + next + ')', elem).css({ zIndex: 10 }).fadeIn(option.fadeSpeed, function () {
                                control.children(':eq(' + prev + ')', elem).css({ display: 'none', zIndex: 0 });
                                $(this).css({ zIndex: 0 });
                                option.animationComplete(next + 1);
                                active = false;
                            });
                        } else {
                            option.animationStart();
                            control.children(':eq(' + prev + ')', elem).fadeOut(option.fadeSpeed, function () {
                                if (option.autoHeight) {
                                    control.animate({ height: control.children(':eq(' + next + ')', elem).outerHeight() }, option.autoHeightSpeed, function () {
                                        control.children(':eq(' + next + ')', elem).fadeIn(option.fadeSpeed);
                                    });
                                } else {
                                    control.children(':eq(' + next + ')', elem).fadeIn(option.fadeSpeed, function () {
                                        if ($.browser.msie) {
                                            $(this).get(0).style.removeAttribute('filter');
                                        }
                                    });
                                }
                                option.animationComplete(next + 1);
                                active = false;
                            });
                        }
                    } else {
                        control.children(':eq(' + next + ')').css({ left: position, display: 'block' });
                        if (option.autoHeight) {
                            option.animationStart();
                            control.animate({ left: direction, height: control.children(':eq(' + next + ')').outerHeight() }, option.slideSpeed, function () {
                                control.css({ left: -width });
                                control.children(':eq(' + next + ')').css({ left: width, zIndex: 5 });
                                control.children(':eq(' + prev + ')').css({ left: width, display: 'none', zIndex: 0 });
                                option.animationComplete(next + 1);
                                active = false;
                            });
                        } else {
                            option.animationStart();
                            control.animate({ left: direction }, option.slideSpeed, function () {
                                control.css({ left: -width });
                                control.children(':eq(' + next + ')').css({ left: width, zIndex: 5 });
                                control.children(':eq(' + prev + ')').css({ left: width, display: 'none', zIndex: 0 });
                                option.animationComplete(next + 1);
                                active = false;
                            });
                        }
                    }
                    if (option.pagination) {
                        $('.' + option.paginationClass + ' a.h_current', elem).removeClass('h_current');
                        $('.' + option.paginationClass + ' a[n=#' + next + ']', elem).addClass('h_current');
                    }
                }
            }
            ;
        });
    };
    $.fn.h_slides.option = { preload: false, preloadImage: '/img/loading.gif', container: 'h_slides_container', generateNextPrev: false, next: 'next', prev: 'prev', pagination: true, generatePagination: true, paginationClass: 'h_pagination', fadeSpeed: 350, slideSpeed: 350, start: 1, effect: 'slide', crossfade: false, randomize: false, play: 0, pause: 0, hoverPause: false, autoHeight: false, autoHeightSpeed: 350, bigTarget: false, animationStart: function () {
    }, animationComplete: function () {
    }
    };
    $.fn.randomize = function (callback) {
        function randomizeOrder() {
            return (Math.round(Math.random()) - 0.5);
        }
        return ($(this).each(function () {
            var $this = $(this);
            var $children = $this.children();
            var childCount = $children.length;
            if (childCount > 1) {
                $children.hide();
                var indices = [];
                for (i = 0; i < childCount; i++) {
                    indices[indices.length] = i;
                }
                indices = indices.sort(randomizeOrder);
                $.each(indices, function (j, k) {
                    var $child = $children.eq(k);
                    var $clone = $child.clone(true);
                    $clone.show().appendTo($this);
                    if (callback !== undefined) {
                        callback($child, $clone);
                    }
                    $child.remove();
                });
            }
        }));
    };
})(jQuery);
