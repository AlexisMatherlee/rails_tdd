class TestjsonController < ApplicationController
	def list
		@object = { bob: true }

		respond_to do |format|
			format.json { render json: @object }
		end
	end
end
