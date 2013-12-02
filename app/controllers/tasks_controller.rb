class TasksController < ApplicationController

  def index
  	@tasks = Task.all
  end

  def new
    @task = Task.new
  end

  def create
  	# @task = Task.create(params[:task])
  	@task = Task.new(task_params)
  	# @dog = Dog.new(params.require(:dog).permit(:name, :legs))
  	redirect_to :back
  end

  def edit
  	@task = Task.find(params[:id])
  end

  def update
    task = Task.find(params[:id])
    if @task.update_attributes(task_params)
       redirect_to :tasks_path
    else
       redirect_to :back
    end
  end
end

end
