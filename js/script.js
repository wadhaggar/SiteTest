$(document).ready(function(){
    // كتابة عنصر جي كوريري
    //alert('test شكرا أستاذ نور');

// استقبال الاحداص
    $('.delete').click(function(){
       // التنقل داخل المستند
    // $('.delete').slideUp();
       //$(this).parents(".blog").hide();
    $(this).parents(".blog").fadeOut();
    });

// اخفاء عناصر صندوق الاسئلة والاجابات
    $('.answer').hide();
    $('.question').click(function(){
    // The following code shows all the answaers, but in case we need to slide dwon only the answer needed
        // $('.answer').slideDown();
        
    // The following code shows the answer on click, but if we want hide it back then use 'slideToggle'
        $(this).next('.answer').slideToggle(); //slideDwon, hide, slideToggle, ...etc
    });
// اضافة عوامل من السي اس اس
    //$('.question').addClass('.pointer'); // 2 pooibilities: either with JS or CSS

    // اضافـــــة عناصر ال اتش تي م ل ضمن الكود
// We can add symbols and icons either with js or css. Look the code below
    $('.question').append('<span class="icon">>></span>');

// الانتقال لعنصر أو عناصر معينة لصفحة أخرى
    $('.more').click(function(){
        $('.place-holder').load('more.html .readMore');
        return false; // حتى لا يحمل كل الصفحة وانما العنصر المراد فقط
    });

});