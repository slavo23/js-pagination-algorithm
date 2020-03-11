This is my implementation of pagination algorithm using javascript.

```
    The instance of a class takes
    two arguments:

    let a = [your_array_of_elements]
    let b = elements_displayed
    const p = new Paginator(a,b)
```

``` 
    It has following methods:

    p.next()
    //Returns next set of elements
    p.previous()
    //Returns pervious set of elements
    p.moveTo(address)
    //Returns elements located on a specific address.
    //Addresses can be accessed using p.current (current page) and p.pages(pages count)
```

TODO:
- Perform additional tests.
- Make a visual use example.

