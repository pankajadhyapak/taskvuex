<?php

use App\Project;
use App\Task;

Route::get("/api/task/{task}", function(Task $task){
    return $task;
});

Route::put("/api/task/{task}", function(Task $task){
    $task->fill(request()->all());
    $task->save();
    return $task;
});
Route::get("/api/projects", function(){
   return Project::all();
});
Route::get("/api/tasks", function(){
    return Task::all();
});

Route::get("/api/project/{project}/tasks", function(Project $project){
    return $project->tasks;
});

Route::get('/', function () {
    return view('welcome');
});
Route::get('/dashboard/{vue_capture?}', 'HomeController@index')
    ->name('dashboard')
    ->where('vue_capture', '[\/\w\.-]*');
Auth::routes();
