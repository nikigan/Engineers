let countWork = $('#carousel .carousel-item').length;
let currentIndexWork = $('#carousel .carousel-item.active').index() + 1;
let countReviews = $('#review-carousel .carousel-item').length;
let currentIndexReview = $('#review-carousel .carousel-item.active').index() + 1;

let $carousel = $('.cases-carousel').flickity({
  "freeScroll": false,
  "pageDots": false,
  "prevNextButtons": false,
  "cellSelector": '.carousel-cell',
  "initialIndex": 1
});

let $carouselArt = $('.articles-carousel').flickity({
  pageDots: false,
  prevNextButtons: false,
  cellSelector: '.carousel-cell'
});

$(document).ready(function(){
  currentIndexWork = $('#carousel .carousel-item.active').index() + 1;
  $('.number').html('<span>' + '0' + currentIndexWork + '</span>' + '/' + '0' + countWork);
  currentIndexReview = $('#review-carousel .carousel-item.active').index() + 1;
  $('.number-reviews').html('<span>' + '0' + currentIndexReview + '</span>' + '/' + '0' + countReviews);
});

$('#carousel').on('slid.bs.carousel', function(){
  currentIndexWork = $('#carousel .carousel-item.active').index() + 1;
  $('.number').html('<span>' + '0' + currentIndexWork + '</span>' + '/' + '0' + countWork);
});

$('#review-carousel').on('slid.bs.carousel', function(){
  currentIndexReview = $('#review-carousel .carousel-item.active').index() + 1;
  $('.number-reviews').html('<span>' + '0' + currentIndexReview + '</span>' + '/' + '0' + countReviews);
});

$('#prev').on('click', function(){
  $carousel.flickity('previous');
});

$('#next').on('click', function(){
  $carousel.flickity('next');
});