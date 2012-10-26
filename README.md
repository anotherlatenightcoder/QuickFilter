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

inputid = is the ID of the <input type="text">
tableid = is the ID of the table you want to filter on (No nested tables)
child = is the column that you want to filter on ex. 1, 2, 3 (dont use multiple columns)

Example:
========

<script>
    quickFilter('quickfilter','filter',2);
</script>