let books = [
    { imageSrc: "assets/books/A_False_Report.jpg", imageAlt: "Book: A False Report" },
    { imageSrc: "assets/books/Dark_Matter.jpg", imageAlt: "Book: Dark Matter" },
    { imageSrc: "assets/books/Dear_Mr_M.jpg", imageAlt: "Book: Dear Mr M" },
    { imageSrc: "assets/books/Gap_of_Time.jpg", imageAlt: "Book: Gap of Time" },
    { imageSrc: "assets/books/Great_Nadar.jpg", imageAlt: "Book: Great Nadar" },
    { imageSrc: "assets/books/How_Democracies_Die.jpg", imageAlt: "Book: How Democracies Die" },
    { imageSrc: "assets/books/How_to_Behave.jpg", imageAlt: "Book: How to Behave" },
    { imageSrc: "assets/books/In_a_Different_Key.jpg", imageAlt: "Book: In a Different Key" },
    { imageSrc: "assets/books/Kanye_West.jpg", imageAlt: "Book: Kanye West" },
    { imageSrc: "assets/books/Nonsense.jpg", imageAlt: "Book: Nonsense" },
    { imageSrc: "assets/books/On_Tyranny.jpg", imageAlt: "Book: On Tyranny" },
    { imageSrc: "assets/books/Rhett_and_Link.jpg", imageAlt: "Book: Rhett and Link" },
    { imageSrc: "assets/books/Things_We_Lost_in_the_Fire.jpg", imageAlt: "Book: Things We Lost in the Fire" },
    { imageSrc: "assets/books/Unfair.jpg", imageAlt: "Book: Unfair" },
    { imageSrc: "assets/books/Vegetarian.jpg", imageAlt: "Book: Vegetarian" },
    { imageSrc: "assets/books/Walk_Through_Walls.jpg", imageAlt: "Book: Walk Through Walls" }
];

var itemsPerPage = 8;

$(document).ready(initialize);

function initialize() {
    loadImages();
}

function loadFooter() {
}

function loadImages() {
    booksContainer = $("#booksContainer");

    books.forEach(book => {
        let bookImage = $("<img>").addClass("bookImage").attr("src", book.imageSrc).attr("alt", book.imageAlt);
        booksContainer.append(bookImage);
    });
}