; (function($, window, document) {
    $.fn.ZalkiHoverImg = function(options) {
        var setting = $.extend({
            parentDivSize: true,
            popupSpeedDown: 500,
            popupSpeedUp: 500,
            popupEasing: 'easeOutBounce',
            popup2SpeedDown: 700,
            popup2SpeedUp: 700,
            popup2Easing: 'easeOutBounce',
            popupHorizontalSpeedIn: 800,
            popupHorizontalSpeedOut: 900,
            popupHorizontalEasing: 'easeOutExpo',
            popupLeftHorizontalSpeedIn: 700,
            popupLeftHorizontalSpeedOut: 700,
            popupLeftEasing: 'easeInOutElastic',
            popupRightHorizontalSpeedIn: 700,
            popupRightHorizontalSpeedOut: 700,
            popupRightEasing: 'easeInOutElastic',
            popupOverlaySpeedIn: 700,
            popupOverlaySpeedOut: 500,
            popupOverlayOpacity: 0.3,
            popupOverlayEasing: 'swing',
            overlayTextOpacity: 0.5,
            overlayTextSpeedIn: 500,
            overlayTextSpeedOut: 500,
            overlayTextEasing: 'easeInOutQuart',
            textHTitleSpeedIn: 1300,
            textHTitleSpeedOut: 900,
            textHTitleEasing: 'easeOutBack',
            textHBoxSpeedIn: 1100,
            textHBoxSpeedOut: 800,
            textHBoxEasing: 'easeInOutElastic',
            textVTitleSpeedIn: 1300,
            textVTitleSpeedOut: 700,
            textVTitleEasing: 'easeInOutBack',
            textVBoxSpeedIn: 1100,
            textVBoxSpeedOut: 700,
            textVBoxEasing: 'easeOutCirc',
            doubleOverlayOpacity: 0.5,
            doubleOverlay1SpeedIn: 600,
            doubleOverlay1SpeedOut: 600,
            doubleOverlay1Easing: 'easeOutBounce',
            doubleOverlay2SpeedIn: 700,
            doubleOverlay2SpeedOut: 700,
            doubleOverlay2Easing: 'easeOutBounce',
            boardSpeedIn: 1200,
            boardSpeedOut: 400,
            boardEasing: 'easeInOutElastic'

        },
        options);
        return this.each(function() {
            var himself = $(this),
            popup = $('.popup'),
            popup2 = $('.popup2'),
            r_board = $('.r_board'),
            overlayPop = $("<div class='overlayPop'></div>"),
            overlayText = $("<div class='overlayText'></div>"),
            overlayRubTop = $("<div class='overlayRubTop'></div>"),
            overlayRubBottom = $("<div class='overlayRubBottom'></div>"),
            textBox = $('.textBox'),
            textTitle = $('.textTitle');
            if (setting.parentDivSize == true) {
                var thisHeight = himself.children('img').height(),
                thisWidth = himself.children('img').width()

            } else {
                var thisHeight = himself.height(),
                thisWidth = himself.width()

            };
            var popupHeight = himself.find(popup).height(),
            popupWidth = himself.find(popup).width(),
            popup2Height = himself.find(popup2).height(),
            popup2Width = himself.find(popup2).width(),
            r_boardWidth = himself.find(r_board).width(),
            r_boardHeight = himself.find(r_board).height(),
            textBoxHeight = himself.children(textBox).outerHeight(true),
            textBoxWidth = himself.children(textBox).outerWidth(true),
            textTitleHeight = himself.children(textTitle).outerHeight(true),
            textTitleWidth = himself.children(textTitle).outerWidth(true),
            calPopupLeft = thisWidth / 2 - popupWidth / 2,
            calPopupTop = thisHeight / 2 - popupHeight / 2,
            calPopupTop2 = thisHeight / 2 - popup2Height / 2,
            calR_boardLeft = thisWidth / 2 - r_boardWidth / 2,
            calR_boardTop = thisHeight / 2 - r_boardHeight / 2,
            calPopup2Left = thisWidth / 2 - popup2Width / 2 + popupWidth / 2 + 10,
            calPopup2Right = thisWidth / 2 - popup2Width / 2 - popupWidth / 2 - 10,
            calPopupLeft2 = thisWidth / 2 - popupWidth / 2 - popup2Width / 2 - 10;
            var coordinateOneDown = {
                top: calPopupTop

            },
            coordinateTwoDown = {
                top: calPopupTop2

            },
            coordinateOneLeft = {
                left: calPopupLeft

            },
            coordinateOneLeftBack = {
                left: -popupWidth * 2

            },
            coordinateOneTwoLeft = {
                left: calPopupLeft2

            },
            coordinateOneTwoRight = {
                right: calPopup2Right

            },
            coordinateOneTwoLeftBack = {
                left: -popupWidth * 2

            },
            coordinateOneTwoRightBack = {
                right: -popup2Width * 2

            },
            coordinateTwoUp = {
                top: -popup2Height * 2

            },
            coordinateOneUp = {
                top: -popupHeight * 2

            },
            coordinateOneBottom = {
                top: thisHeight * 2

            },
            coordinateTitleVertical = {
                top: 0

            },
            coordinateBoxVertical = {
                bottom: 0

            },
            coordinateTitleVerticalBck = {
                top: -textTitleHeight * 2

            },
            coordinateBoxVerticalBck = {
                bottom: -textBoxHeight * 2

            },
            coordinateTitleHorizontal = {
                left: 0

            },
            coordinateBoxHorizontal = {
                right: 0

            },
            coordinateTitleHorizontalBck = {
                left: -textTitleWidth * 2

            },
            coordinateBoxHorizontalBck = {
                right: -textBoxWidth * 2

            };
            himself.css({
                'width': thisWidth,
                'height': thisHeight

            });
            if (himself.attr('data-hipop') == 'one' || himself.attr('data-hipop') == 'two' || himself.attr('data-hipop') == 'one-horizontal' || himself.attr('data-hipop') == 'two-horizontal') {
                himself.prepend(overlayPop)

            } else if (himself.attr('data-hipop') == 'text_content' || himself.attr('data-hipop') == 'text_content2') {
                himself.prepend(overlayText)

            } else if (himself.attr('data-hipop') == 'rub') {
                himself.prepend(overlayRubTop, overlayRubBottom)

            };
            himself.find(overlayPop).css({
                'width': thisWidth,
                'height': thisHeight

            });
            himself.find(overlayText).css({
                'width': thisWidth,
                'height': thisHeight

            });
            himself.find(overlayRubTop).css({
                'width': thisWidth,
                'height': 0

            });
            himself.find(overlayRubBottom).css({
                'width': thisWidth,
                'height': 0

            });
            var overlayTextHeight = himself.find(overlayText).height(),
            overlayTextWidth = himself.find(overlayText).width();
            var coordinateTextOverlayLeft = {
                left: 0

            },
            coordinateTextOverlayLeftBack = {
                left: -overlayTextWidth

            },
            coordinateTextOverlayTop = {
                top: 0

            },
            coordinateTextOverlayTopBack = {
                top: -overlayTextHeight

            };
            function overlayInOut(el1, speed, opacity, easing) {
                el1.find(overlayPop).stop().fadeTo(speed, opacity, easing)

            };
            function onePopup(el1, calPosition, speed, easing) {
                el1.find(popup).stop(true, true).animate(calPosition, speed, easing)

            };
            function twoPopup(el1, calPopup, calPopup2, speed, speed2, easing, easing2) {
                el1.find(popup).stop(true, true).animate(calPopup, speed, easing);
                el1.find(popup2).stop(true, true).animate(calPopup2, speed2, easing2)

            };
            function oneBoard(el1, calPosition, speed, easing) {
                el1.find(r_board).stop(true, true).animate({
                    top: calPosition

                },
                speed, easing)

            };
            function overlayTextInOut(el1, coordinate, speed, easing) {
                el1.find(overlayText).stop(true, true).animate(coordinate, speed, easing)

            };
            function textContent(el1, calPopup, calPopup2, speed, speed2, easing, easing2) {
                el1.find(textTitle).stop(true, true).animate(calPopup, speed, easing);
                el1.find(textBox).stop(true, true).animate(calPopup2, speed2, easing2)

            };
            function doubleOverlay(el1, calPopup, calPopup2, speed, speed2, easing, easing2) {
                el1.find(overlayRubTop).stop(true, true).animate({
                    height: calPopup

                },
                speed, easing);
                el1.find(overlayRubBottom).stop(true, true).animate({
                    height: calPopup2

                },
                speed2, easing2)

            };
            if (himself.attr('data-hipop') == 'one') {
                himself.find(popup).css({
                    'top': -popupHeight * 2,
                    'left': calPopupLeft,
                    'display': 'block'

                })

            } else if (himself.attr('data-hipop') == 'two') {
                himself.find(popup).css({
                    'top': -popupHeight * 2,
                    'left': calPopupLeft2,
                    'display': 'block'

                });
                himself.find(popup2).css({
                    'top': -popup2Height * 2,
                    'left': calPopup2Left,
                    'display': 'block'

                })

            } else if (himself.attr('data-hipop') == 'one-horizontal') {
                himself.find(popup).css({
                    'top': calPopupTop,
                    'left': -popupWidth * 2,
                    'display': 'block'

                })

            } else if (himself.attr('data-hipop') == 'two-horizontal') {
                himself.find(popup).css({
                    'top': calPopupTop,
                    'left': -popupWidth * 2,
                    'display': 'block'

                });
                himself.find(popup2).css({
                    'top': calPopupTop2,
                    'right': -popup2Width * 2,
                    'display': 'block'

                })

            } else if (himself.attr('data-hipop') == 'text_content') {
                himself.find(overlayText).css({
                    'left': -overlayTextWidth,
                    'top': 0

                }).stop().fadeTo(200, setting.overlayTextOpacity);
                himself.find(textTitle).css({
                    left: 0,
                    top: -textTitleHeight * 2

                });
                himself.find(textBox).css({
                    left: 0,
                    bottom: -textBoxHeight * 2,
                    width: thisWidth - 20,
                    padding: '10px'

                })

            } else if (himself.attr('data-hipop') == 'text_content2') {
                himself.find(overlayText).css({
                    'left': 0,
                    'top': -overlayTextHeight

                }).stop().fadeTo(200, setting.overlayTextOpacity);
                himself.find(textTitle).css({
                    left: -textTitleWidth * 2,
                    top: 0

                });
                himself.find(textBox).css({
                    right: -textBoxWidth * 2,
                    bottom: 0,
                    width: thisWidth - 20,
                    padding: '10px'

                })

            } else if (himself.attr('data-hipop') == 'rub') {
                himself.find(overlayRubTop).css({
                    'left': 0,
                    'top': 0

                }).stop().fadeTo(200, setting.doubleOverlayOpacity);
                himself.find(overlayRubBottom).css({
                    'left': 0,
                    'bottom': 0

                }).stop().fadeTo(200, setting.doubleOverlayOpacity);
                himself.find(r_board).css({
                    'top': -r_boardHeight * 2,
                    'left': calR_boardLeft,
                    'display': 'block'

                })

            };
            himself.on({
                mouseenter: function() {
                    if (himself.attr('data-hipop') == 'one') {
                        onePopup(himself, coordinateOneDown, setting.popupSpeedDown, setting.popupEasing)

                    } else if (himself.attr('data-hipop') == 'two') {
                        twoPopup(himself, coordinateOneDown, coordinateTwoDown, setting.popupSpeedDown, setting.popup2SpeedDown, setting.popupEasing, setting.popup2Easing)

                    } else if (himself.attr('data-hipop') == 'one-horizontal') {
                        onePopup(himself, coordinateOneLeft, setting.popupHorizontalSpeedIn, setting.popupHorizontalEasing)

                    } else if (himself.attr('data-hipop') == 'two-horizontal') {
                        twoPopup(himself, coordinateOneTwoLeft, coordinateOneTwoRight, setting.popupLeftHorizontalSpeedIn, setting.popupRightHorizontalSpeedIn, setting.popupLeftEasing, setting.popupRightEasing)

                    } else if (himself.attr('data-hipop') == 'text_content') {
                        textContent(himself, coordinateTitleVertical, coordinateBoxVertical, setting.textVTitleSpeedIn, setting.textVBoxSpeedIn, setting.textVTitleEasing, setting.textVBoxEasing)

                    } else if (himself.attr('data-hipop') == 'text_content2') {
                        textContent(himself, coordinateTitleHorizontal, coordinateBoxHorizontal, setting.textHTitleSpeedIn, setting.textHBoxSpeedIn, setting.textHTitleEasing, setting.textHBoxEasing)

                    } else if (himself.attr('data-hipop') == 'rub') {
                        oneBoard(himself, calR_boardTop, setting.boardSpeedIn, setting.boardEasing)

                    };
                    if (himself.attr('data-hipop') == 'one' || himself.attr('data-hipop') == 'two' || himself.attr('data-hipop') == 'one-horizontal' || himself.attr('data-hipop') == 'two-horizontal') {
                        overlayInOut(himself, setting.popupOverlaySpeedIn, setting.popupOverlayOpacity, setting.popupOverlayEasing)

                    } else if (himself.attr('data-hipop') == 'text_content') {
                        overlayTextInOut(himself, coordinateTextOverlayLeft, setting.overlayTextSpeedIn, setting.overlayTextEasing)

                    } else if (himself.attr('data-hipop') == 'text_content2') {
                        overlayTextInOut(himself, coordinateTextOverlayTop, setting.overlayTextSpeedIn, setting.overlayTextEasing)

                    } else if (himself.attr('data-hipop') == 'rub') {
                        doubleOverlay(himself, Math.ceil(thisHeight / 2), Math.floor(thisHeight / 2), setting.doubleOverlay1SpeedIn, setting.doubleOverlay2SpeedIn, setting.doubleOverlay1Easing, setting.doubleOverlay2Easing)

                    }

                },
                mouseleave: function() {
                    if (himself.attr('data-hipop') == 'one') {
                        onePopup(himself, coordinateOneUp, setting.popupSpeedUp, setting.popupEasing)

                    } else if (himself.attr('data-hipop') == 'two') {
                        twoPopup(himself, coordinateOneUp, coordinateTwoUp, setting.popupSpeedUp, setting.popup2SpeedUp, setting.popupEasing, setting.popup2Easing)

                    } else if (himself.attr('data-hipop') == 'one-horizontal') {
                        onePopup(himself, coordinateOneLeftBack, setting.popupHorizontalSpeedOut, setting.popupHorizontalEasing)

                    } else if (himself.attr('data-hipop') == 'two-horizontal') {
                        twoPopup(himself, coordinateOneTwoLeftBack, coordinateOneTwoRightBack, setting.popupLeftHorizontalSpeedOut, setting.popupRightHorizontalSpeedOut, setting.popupLeftEasing, setting.popupRightEasing)

                    } else if (himself.attr('data-hipop') == 'text_content') {
                        textContent(himself, coordinateTitleVerticalBck, coordinateBoxVerticalBck, setting.textVTitleSpeedOut, setting.textVBoxSpeedOut, setting.textVTitleEasing, setting.textVBoxEasing)

                    } else if (himself.attr('data-hipop') == 'text_content2') {
                        textContent(himself, coordinateTitleHorizontalBck, coordinateBoxHorizontalBck, setting.textHTitleSpeedOut, setting.textHBoxSpeedOut, setting.textHTitleEasing, setting.textHBoxEasing)

                    } else if (himself.attr('data-hipop') == 'rub') {
                        oneBoard(himself, -r_boardHeight * 2, setting.boardSpeedOut, setting.boardEasing)

                    };
                    if (himself.attr('data-hipop') == 'one' || himself.attr('data-hipop') == 'two' || himself.attr('data-hipop') == 'one-horizontal' || himself.attr('data-hipop') == 'two-horizontal') {
                        overlayInOut(himself, setting.popupOverlaySpeedOut, 0, setting.popupOverlayEasing)

                    } else if (himself.attr('data-hipop') == 'text_content') {
                        overlayTextInOut(himself, coordinateTextOverlayLeftBack, setting.overlayTextSpeedOut, setting.overlayTextEasing)

                    } else if (himself.attr('data-hipop') == 'text_content2') {
                        overlayTextInOut(himself, coordinateTextOverlayTopBack, setting.overlayTextSpeedOut, setting.overlayTextEasing)

                    } else if (himself.attr('data-hipop') == 'rub') {
                        doubleOverlay(himself, 0, 0, setting.doubleOverlay1SpeedOut, setting.doubleOverlay2SpeedOut, setting.doubleOverlay1Easing, setting.doubleOverlay2Easing)

                    }

                }

            })

        })

    }

})(jQuery, window, document);