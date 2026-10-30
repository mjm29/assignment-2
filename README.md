Group Members:
Alexandru Josu - StudentPortal(states), SearchBox, AddStudent, Remove student button and clear all
Marc Millare - StudentPortal(layout, styling), StatsPanel, StudentList, StudentCard, Show Details button

| Test                                                                      | Output                                                                                                                               | Result |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| Open the app.                                                             | StatsPanel and all students are shown.                                                                                               | Pass   |
| Show Details on one card                                                  | Card shows the average of that student and the button becomes Hide details.                                                          | Pass   |
| Remove grade 12 student                                                   | Student is removed from the list, StatsPanel numbers are updated.                                                                    | Pass   |
| Type a last name in capitals, then empty the box.                         | Only matching students show up on the list. Upon emptying the search box, all students are shown again.                              | Pass   |
| Search for 'zzz'.                                                         | Displays "No students found" message. The three stats remain the same.                                                               | Pass   |
| Leave the first name empty, fill in the last name, and click Add student. | Nothing gets added to the list if the first name is empty.                                                                           | Pass   |
| Fill in all inputs and click Add Student                                  | Student card is rendered for the added student. The stats panel updated and the name inputs are empty, grade is 9 and average is 70. | Pass   |
| Click clear all.                                                          | No students message shows.                                                                                                           | Pass   |
| Narrow browser to phone width.                                            | Cards stack into one column, and no sideways scrolling.                                                                              | Pass   |
| Click each link in the navbar.                                            | The page jumps to clicked section.                                                                                                   | Pass   |
