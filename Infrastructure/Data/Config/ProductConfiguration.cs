﻿using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.Data.Config
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.Property(x => x.Id).IsRequired();
            builder.Property(x => x.Name).IsRequired().HasMaxLength(100);
            builder.Property(x => x.Description).IsRequired().HasMaxLength(100);
            builder.Property(x => x.Price).HasColumnType("decimal(18,2)");
            builder.Property(x => x.PictureUrl).IsRequired();
            builder.HasOne(x => x.ProductBrand).WithMany().HasForeignKey(p=>p.ProductBrandId);
            builder.HasOne(x => x.ProductType).WithMany().HasForeignKey(p=>p.ProductTypeId);

        }
    }
}
