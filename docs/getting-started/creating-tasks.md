---
sidebar_position: 2
---

# Creating Tasks

## Edit Mode
To configure your tasks, you need to enter _"Edit Mode"_ by clicking the _Edit_ button on the to right corner.

![Edit Button](/img/docs/edit_button.png)

Once in edit mode, the interface will change. While in edit mode you can perform the following actions:
* **Create Task**: Click in _"Add New Task"_ button. [More info](#create-a-new-task)
* **Delete Task**: Click on _"Delete"_ button.
* **Update Task**: Click on the task name and update its data.
* **Move Task**: Click and drag the task handle on the left.

To exit  _"Edit Mode"_, click the _Edit_ button again.

![Edit Mode](/img/docs/gaucho_interface_edit.png)

## Create a new task
While in _"Edit Mode"_, the button _"Add New Task"_ will appear below existing tasks.

![Add Task Button](/img/docs/add_task_button.png)

Clicking it will display a form asking the [task information](/docs/intro#tasks). Only the **name**
and **command** fields are required.

![Add New Task Form](/img/docs/add_new_task_form.png)

* **Name**: A friendly name for the task (e.g. "Run Server").
* **Command**: The command to run (e.g. "make").
* **Path**: The path to run the command, (defaults to "/home").
* **Env Variables**: Define env variables to run the task, check [Env Variables](/docs/features/env-variables) for more details.

:::tip
Check some tasks [examples](/docs/examples/intro).
:::