﻿// <auto-generated />
using System;
using IdentityMicroservice.Infrastructure.Persistence.DbContexts.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace IdentityMicroservice.Infrastructure.Migrations
{
    [DbContext(typeof(IdentityDbContext))]
    [Migration("20220324220816_SecondMigration")]
    partial class SecondMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.13")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityRole", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("IdentityUserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("IdentityUserId");

                    b.ToTable("IdentityRole");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityRoleClaim", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("ClaimValue")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<Guid>("RoleId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("IdentityRoleClaim");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityUser", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("LockoutEnd")
                        .HasColumnType("datetime2");

                    b.Property<int>("NumberOfFailLoginAttempts")
                        .HasColumnType("int");

                    b.Property<string>("PasswordHash")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("PhoneNumberCountryPrefix")
                        .IsRequired()
                        .HasMaxLength(6)
                        .HasColumnType("nvarchar(6)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("IdentityUser");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityUserClaim", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("ClaimValue")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("IdentityUserClaim");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityUserExternalLogin", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("LoginProvider")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("ProviderDisplayName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("ProviderKey")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("IdentityUserExternalLogin");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityUserIdentityRole", b =>
                {
                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("RoleId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("IdentityUserIdentityRole");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityUserToken", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("ExpirationDate")
                        .HasColumnType("datetime2");

                    b.Property<bool>("IsTokenRevoked")
                        .HasColumnType("bit");

                    b.Property<string>("RefreshTokenValue")
                        .HasMaxLength(800)
                        .HasColumnType("nvarchar(800)");

                    b.Property<string>("TokenValue")
                        .IsRequired()
                        .HasMaxLength(800)
                        .HasColumnType("nvarchar(800)");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("IdentityUserToken");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityUserTokenConfirmation", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ConfirmationToken")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<byte>("ConfirmationTypeId")
                        .HasColumnType("tinyint");

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("ExpireDate")
                        .HasColumnType("datetime2");

                    b.Property<bool>("IsRevoked")
                        .HasColumnType("bit");

                    b.Property<bool>("IsUsed")
                        .HasColumnType("bit");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("IdentityUserTokenConfirmation");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.Screen", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("ChangeDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("ChangedByUserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("End")
                        .HasColumnType("datetime2");

                    b.Property<string>("ScreenCode")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("ScreenName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("Start")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Screen");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.WOType", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("ChangeDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("ChangedByUserId")
                        .HasMaxLength(50)
                        .HasColumnType("uniqueidentifier");

                    b.Property<decimal>("DurationMinutes")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("WOTypeCode")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("WOTypeName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.ToTable("WOType");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.WOTypeScenario", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("End")
                        .HasColumnType("datetime2");

                    b.Property<string>("ScenarioCode")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("ScenarioName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("Start")
                        .HasColumnType("datetime2");

                    b.Property<int>("State")
                        .HasColumnType("int");

                    b.Property<Guid>("WOTypeId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("WOTypeId");

                    b.ToTable("WOTypeScenario");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.WOTypeScenarioStep", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ScreenCode")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<Guid>("ScreenId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("StepName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("StepNumber")
                        .HasColumnType("int");

                    b.Property<Guid>("WOScenarioId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("ScreenId")
                        .IsUnique();

                    b.HasIndex("WOScenarioId");

                    b.ToTable("WOTypeScenarioStep");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityRole", b =>
                {
                    b.HasOne("IdentityMicroservice.Domain.Entities.IdentityUser", null)
                        .WithMany("IdentityRoles")
                        .HasForeignKey("IdentityUserId");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityRoleClaim", b =>
                {
                    b.HasOne("IdentityMicroservice.Domain.Entities.IdentityRole", "Role")
                        .WithMany("IdentityRoleClaims")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Role");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityUserClaim", b =>
                {
                    b.HasOne("IdentityMicroservice.Domain.Entities.IdentityUser", "User")
                        .WithMany("IdentityUserClaims")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityUserExternalLogin", b =>
                {
                    b.HasOne("IdentityMicroservice.Domain.Entities.IdentityUser", "User")
                        .WithMany("IdentityUserExternalLogins")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityUserIdentityRole", b =>
                {
                    b.HasOne("IdentityMicroservice.Domain.Entities.IdentityRole", "IdentityRole")
                        .WithMany("IdentityUserRoles")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("IdentityMicroservice.Domain.Entities.IdentityUser", "IdentityUser")
                        .WithMany("IdentityUserRoles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("IdentityRole");

                    b.Navigation("IdentityUser");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityUserToken", b =>
                {
                    b.HasOne("IdentityMicroservice.Domain.Entities.IdentityUser", "User")
                        .WithMany("IdentityUserTokens")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityUserTokenConfirmation", b =>
                {
                    b.HasOne("IdentityMicroservice.Domain.Entities.IdentityUser", "User")
                        .WithMany("IdentityUserTokenConfirmations")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.WOTypeScenario", b =>
                {
                    b.HasOne("IdentityMicroservice.Domain.Entities.WOType", "WOType")
                        .WithMany("WOTypeScenarios")
                        .HasForeignKey("WOTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("WOType");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.WOTypeScenarioStep", b =>
                {
                    b.HasOne("IdentityMicroservice.Domain.Entities.Screen", "Screen")
                        .WithOne("WOTypeScenarioStep")
                        .HasForeignKey("IdentityMicroservice.Domain.Entities.WOTypeScenarioStep", "ScreenId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("IdentityMicroservice.Domain.Entities.WOTypeScenario", "WOTypeScenario")
                        .WithMany("WOTypeScenarioSteps")
                        .HasForeignKey("WOScenarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Screen");

                    b.Navigation("WOTypeScenario");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityRole", b =>
                {
                    b.Navigation("IdentityRoleClaims");

                    b.Navigation("IdentityUserRoles");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.IdentityUser", b =>
                {
                    b.Navigation("IdentityRoles");

                    b.Navigation("IdentityUserClaims");

                    b.Navigation("IdentityUserExternalLogins");

                    b.Navigation("IdentityUserRoles");

                    b.Navigation("IdentityUserTokenConfirmations");

                    b.Navigation("IdentityUserTokens");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.Screen", b =>
                {
                    b.Navigation("WOTypeScenarioStep");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.WOType", b =>
                {
                    b.Navigation("WOTypeScenarios");
                });

            modelBuilder.Entity("IdentityMicroservice.Domain.Entities.WOTypeScenario", b =>
                {
                    b.Navigation("WOTypeScenarioSteps");
                });
#pragma warning restore 612, 618
        }
    }
}
