class ChangeFestivalColumns < ActiveRecord::Migration[6.1]
  def change
    rename_column :festivals, :start_date, :duration
    rename_column :festivals, :end_date, :description
  end
end
