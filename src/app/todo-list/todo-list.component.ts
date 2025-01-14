import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [NgFor,FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  ngOnInit(): void {
    const exampleTask={name:"taskExample",completed:false};
      this.tasks.push(exampleTask);
  }
  

  // La liste des tâches
  tasks : { name:string , completed:boolean}[]=[];

  // La nouvelle tâche
  newTask:string='';


  // Ajouter une nouvelle tâche
  addNewTask(){
   if(this.newTask.trim()){
      this.tasks.push({name:this.newTask,completed:false});
      this.newTask=''; // Réinitialiser le champ
   }
  }

  
  // Marquer une tâche comme terminée
  toggleTakCompletion(task : {name:string , completed:boolean}){
    task.completed=!task.completed;
  }


  deleteTask(index:number){
    this.tasks.splice(index,1);
  }


}
