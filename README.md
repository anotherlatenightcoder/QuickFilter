QuickFilter
===========

Filter html columns on the fly with highlighting using jQuery

Demo
====

http://overtureofthewicked.com/github/QuickFilter/sample.html

Instructions
============

1. Make sure you have jquery included, then include quickfilter.js
2. call the following function - quickFilter(inputid, tableid, child)

<ul>
<li>inputid = is the ID of the <input type="text"></li>
<li>tableid = is the ID of the table you want to filter on (No nested tables)</li>
<li>child = is the column that you want to filter on (index/even/odd/equation)</li>
</ul>

Example:
========

&lt;script&gt;
    quickFilter('quickfilter','filter',2);
&lt;/script&gt;