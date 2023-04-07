//---Table of Contents---//
1. REFERENCES
2. index.html (home page) code explaination.
3. LearnJava.html page code explaination.
4. about.html page code explaination.
5. styles.css code explaination. (CSS)
6. script.js code explaination. (JavaScript)
7. Relative Paths
8. FILE STRUCTURE

                ---------------------------
Please Note: I have used a few lines of code from A2 in my A3.

//--- REFERENCES ---//
[1] Lines 95-101 in LearnJava.html uses podcast (internal) audio, reference given below:

    Matt Speake. The Java Easily Podcast: Java Easily Podcast #7: 
    The Quickest Way to Learn Java for Absolute Beginners on Apple Podcasts. Apple Podcasts. 
    Retrieved February 8, 2023 from
    https://podcasts.apple.com/us/podcast/java-easily-podcast-7-the-quickest-way-to-learn-java/id1556259943?i=1000534973627

[2] Lines 72-77 in LearnJava.html uses external link to a picture, reference given below:

    Mindmajix Technologies. 2021. Data types in java | java data types | example. Mindmajix. 
    Retrieved February 3, 2023 from https://mindmajix.com/data-types-in-java

[3] Lines 96-110 in LearnPython.html uses <video> which includes Youtube (internal) Video, reference given below:

    How To Find The Smallest Number In A List Python. Case Digital. 
    Retrieved February 3, 2023 from https://www.youtube.com/watch?v=u1_hg6L_UFU

[4] Lines 105-110 in LearnJava.html uses <iframe> which includes Youtube (external) Video, reference given below:

    Java Tutorial for Beginners #8 - Arrays. Tech with Tim.
    Retrieved February 3, 2023 from https://www.youtube.com/watch?v=_Wf2rbL9wQU

                ---------------------------

//--- index.html page ---//
Navigation bar is under the header <header> tag.
1. <nav> Navigation bar:
    a. it contains links to all the webpage in the website.
2. <h1> (Heading 1) falls under the class "mainHeading":
    a. Contains the Heading of index.html page
3. <image> tag falls under the class "image-container":
    a. image tag contains image for the home page (Logo).
4. <section> tag fall under the class "selfLearning":
    a. it contains the paragraph <p> tag, containing some paragraph.

                ---------------------------

//--- LearnPython.html page ---//
1. <nav> Navigation bar:
    a. it contains links to all the webpage in the website.
2. <div>:
    a. contains explaination of Variables and Datatypes
    b. nested list, explaining the concepts Lists by examples
    c. Video from youtube, explaining the lists in Python.

                ---------------------------

//--- LearnJava.html page ---//
1. <nav> Navigation bar:
    a. it contains links to all the webpage in the website.
2. <div>:
    a. contains explaination of Variables and Datatypes
    b. nested list, explaining the concepts of Arrays by examples
    c. Audio from the java easily podcast, explaining the Arrays in Java.

                ---------------------------

//--- about.html page ---//
1. <nav> Navigation bar:
    a. it contains links to all the webpage in the website.
2. <table> Table:
    a. contains the <th> tag explaining the two main concepts of the website
        a.1. <td> tag explaining everything website included so far.
3. <h3> (Heading 3):
    a. explaining the motive behind the website.

                ---------------------------

//--- styles.css code (CSS) ---//
1. the body tag has the background color as well as the text color.
2. --> anchor tag
    a. Styling the urls by using the :hover property by giving the black color when the user is hovering over it.
    b. Styling the urls by using the :active property by giving the gray background color when the user is sctive on the particular link.
3. header includes the (Flex) property for the index.html page.
4. id --> selfLearning is the footer in the index.html page.
5. All the selectors:
    a. Universal selector used lines 80-85 (*) --> it has set the margin and the padding as 0px because setting all HTML elements' margins and padding values to 0 is the best technique to deal with the issue of an inconsistent box model.
    b. Multiple selector used lines 87-129 (p, a) --> mainly includes the main headings, images and audio/videos of all the web pages.
    c. Sibling selector used lines 133-139 (h1 ~ p) --> the black line right after the main heading in both LearnPython.html and LearnJava.html page.
    d. Child Selector used lines 142-148 (ul > a) --> includes the unordered list, which has the anchor <a> tags.
    e. Adjacent selector used lines 151-154 (h3 + p) --> includes the all the paragraphs in LearnPython.html and LearnJava.html to have a particular font size and padding.
    f. Attribute selector used lines 156-185 (input[type=submit]) --> mostly includes the contents of form.
    g. Pseudo element selector used lines 186-190 (caption::first-letter) --> it has been applied in the about.html page for the table's caption. The first letter of the caption is colored black.

                ---------------------------

//--- script.js code explaination. (JavaScript) ---//
In the script I have functions for the following purposes:
1. For the alertMessage() if user wants to click a link and it will direct them to the neew website
2. For the email validation I am using the emailAddress(event) function
3. For the notification I am using the fun()
4. For the conditional part I am using the updateTime() function
5. For the event handler part I am using the eventHandlerFunc() function

//--- Relative Paths ---//

1. index.html page Relative Paths:
    a. favicon -> ../ourEarth.png
    b. image -> ../Logo.jpeg
2. LearnPython.html page Relative Paths:
    a. favicon -> ../ourEarth.png
    b. Python hello_world code image -> ../py_hello_world.jpeg
    c. Python Lists video -> ../pythonList.mp4
3. LearnJava.html page Relative Paths:
    a. favicon -> ../ourEarth.png
    b. Java helloWorld code image -> ../Java_helloWorld.jpeg
    c. Datatypes image -> ../java_datatypes.jpeg
    d. java easily podcast (internal audio file) -> ../javaEasily.m4a
4. about.html page:
    a. favicon -> ../ourEarth.png
                ---------------------------
            
//--- FILE STRUCTURE ---//
A3_ft803980/
    -> Webpages/
        -> index.html
        -> LearnJava.html
        -> JavaPhotoGallery
        -> about.html
        -> script.js
        -> style.css
    -> Part1_Code_Review/
        -> Code Review
    -> Part2_Desktop_Tablet_Mobile/
        ->
    -> favicon -> ../ourEarth.png
    -> image -> ../Logo.jpeg
    -> Java helloWorld code image -> ../Java_helloWorld.jpeg
    -> Datatypes image -> ../java_datatypes.jpeg
    -> java easily podcast (internal audio file) -> ../javaEasily.m4a