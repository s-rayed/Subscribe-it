class AddProductId3 < ActiveRecord::Migration
  def change
    change_table(:reviews) do |t|
      t.references :product
    end
  end
end
