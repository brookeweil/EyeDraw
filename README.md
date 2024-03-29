I~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
|
|   README
|   
|       Comp 86 Assignment 7: Final Project
|       EyeDraw: a drawing application using gaze tracking
|
|           by: Maya DeBellis (mdbel01) and Brooke Weil (bweil01)
|         date: 11 December 2016
|
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

See HOW_TO_RUN for instructions on running a demo of EyeDraw.


--------------------------------------------------------------------------------
Objects:

- Eyetracker (webgazer)
- Drawing canvas
- Buttons

--------------------------------------------------------------------------------
Inheritence Hierarchy:

Buttons -> 2 types of buttons that inherit from a general input button:
                - change color
                - start and stop drawing

--------------------------------------------------------------------------------
Aggregation Hierarchy:

Drawing canvas - stores and displays drawing infomation created by interpreting 
                 input from the buttons and eyetracker.

--------------------------------------------------------------------------------
Secrets:

- Only the eyetracker will know infomation about the WebGazer and its
  functionality. 
- Only the drawing canvas will know infomation about the current state of the
  drawing
- Only the buttons will be in charge of reacting to mouse clicks

--------------------------------------------------------------------------------
Collabortation:

The drawing canvas will take in location data from the eyetracker to know 
where to draw. It will also take in input from the buttons to know when to run
the draw commands and what color to use.
